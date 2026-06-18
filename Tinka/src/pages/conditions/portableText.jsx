const renderChildren = (children = []) =>
  children.map((child) => child.text || "").join("");

const PortableBlock = ({ block }) => {
  if (!block || block._type !== "block") return null;

  const text = renderChildren(block.children);
  if (!text.trim()) return null;

  if (block.style === "h2") {
    return <h2 className="mt-10 text-2xl font-bold text-[#06192f]">{text}</h2>;
  }

  if (block.style === "h3") {
    return <h3 className="mt-8 text-xl font-bold text-[#06192f]">{text}</h3>;
  }

  if (block.listItem) {
    return <li className="ml-5 list-disc leading-8 text-slate-700">{text}</li>;
  }

  return <p className="mt-5 leading-8 text-slate-700">{text}</p>;
};

const PortableText = ({ value = [] }) => {
  if (!Array.isArray(value) || value.length === 0) return null;

  return (
    <div>
      {value.map((block, index) => (
        <PortableBlock key={block._key || index} block={block} />
      ))}
    </div>
  );
};

export default PortableText;
