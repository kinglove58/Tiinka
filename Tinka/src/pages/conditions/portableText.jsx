import { Link } from "react-router-dom";
import {
  getPortableBlockText,
  getPortableTextBlocks,
} from "./portableTextUtils";

const renderMarkedText = (block, child, index) => {
  const markDefs = block.markDefs || [];
  const marks = child.marks || [];
  let content = child.text || "";

  marks.forEach((mark) => {
    if (mark === "strong") {
      content = <strong key={`${child._key || index}-strong`}>{content}</strong>;
      return;
    }

    if (mark === "em") {
      content = <em key={`${child._key || index}-em`}>{content}</em>;
      return;
    }

    const linkDef = markDefs.find((definition) => definition._key === mark);
    if (!linkDef?.href) return;

    if (linkDef.href.startsWith("/")) {
      content = (
        <Link
          key={`${child._key || index}-link`}
          to={linkDef.href}
          className="font-bold text-[#005ab0] underline decoration-2 underline-offset-4 hover:text-[#00427f]"
        >
          {content}
        </Link>
      );
      return;
    }

    content = (
      <a
        key={`${child._key || index}-link`}
        href={linkDef.href}
        className="font-bold text-[#005ab0] underline decoration-2 underline-offset-4 hover:text-[#00427f]"
        target={linkDef.href.startsWith("http") ? "_blank" : undefined}
        rel={linkDef.href.startsWith("http") ? "noreferrer" : undefined}
      >
        {content}
      </a>
    );
  });

  return content;
};

const renderChildren = (block) =>
  (block.children || []).map((child, index) => (
    <span key={child._key || index}>
      {renderMarkedText(block, child, index)}
    </span>
  ));

const getImageSource = (block = {}) =>
  block.assetUrl || block.asset?.url || block.url || block.imageUrl || "";

const PortableImage = ({ block }) => {
  const src = getImageSource(block);

  if (!src) return null;

  const alt = block.alt || block.caption || "Article image";

  return (
    <figure className="my-9 overflow-hidden rounded-lg border border-[#d6e8f7] bg-[#f8fbff] shadow-sm">
      <img
        src={src}
        alt={alt}
        className="max-h-[520px] w-full object-cover"
        loading="lazy"
      />
      {block.caption && (
        <figcaption className="border-t border-[#d6e8f7] bg-white px-4 py-3 text-sm leading-6 text-slate-600">
          {block.caption}
        </figcaption>
      )}
    </figure>
  );
};

const PortableBlock = ({ item, asListItem = false }) => {
  const { block, heading, headingId } = item;
  if (!block) return null;

  if (block._type === "image") {
    return <PortableImage block={block} />;
  }

  if (block._type !== "block") return null;

  const text = getPortableBlockText(block);
  if (!text) return null;

  if (asListItem || block.listItem) {
    return <li className="pl-1 leading-8 text-slate-700">{renderChildren(block)}</li>;
  }

  if (heading?.level === 2) {
    return (
      <h2
        id={headingId}
        className="mt-11 scroll-mt-32 text-2xl font-extrabold leading-tight text-[#06192f] md:text-3xl"
      >
        {heading.text}
      </h2>
    );
  }

  if (heading?.level === 3) {
    return (
      <h3
        id={headingId}
        className="mt-8 scroll-mt-32 text-xl font-extrabold leading-tight text-[#06192f] md:text-2xl"
      >
        {heading.text}
      </h3>
    );
  }

  if (block.style === "blockquote") {
    return (
      <blockquote className="mt-7 border-l-4 border-[#005ab0] bg-[#f4f8fc] px-5 py-4 text-lg font-semibold leading-8 text-slate-700">
        {renderChildren(block)}
      </blockquote>
    );
  }

  return <p className="mt-5 leading-8 text-slate-700">{renderChildren(block)}</p>;
};

const PortableText = ({ value = [], skipFirstHeadingText = "" }) => {
  const blocks = getPortableTextBlocks(value, { skipFirstHeadingText }).filter(
    (item) => !item.skip,
  );

  if (blocks.length === 0) return null;

  const rendered = [];

  for (let index = 0; index < blocks.length; index += 1) {
    const item = blocks[index];
    const listType = item.block?.listItem;

    if (!listType) {
      rendered.push(<PortableBlock key={item.key} item={item} />);
      continue;
    }

    const listItems = [];
    let cursor = index;

    while (cursor < blocks.length && blocks[cursor].block?.listItem === listType) {
      listItems.push(blocks[cursor]);
      cursor += 1;
    }

    const ListTag = listType === "number" ? "ol" : "ul";

    rendered.push(
      <ListTag
        key={`list-${item.key}`}
        className={`mt-5 space-y-2 pl-6 ${
          ListTag === "ol" ? "list-decimal" : "list-disc"
        }`}
      >
        {listItems.map((listItem) => (
          <PortableBlock key={listItem.key} item={listItem} asListItem />
        ))}
      </ListTag>,
    );

    index = cursor - 1;
  }

  return <div>{rendered}</div>;
};

export default PortableText;
