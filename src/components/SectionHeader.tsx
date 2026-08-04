import React from "react";

function SectionHeader({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="reveal flex items-baseline gap-4 mb-12">
      <span className="font-mono text-[13px] text-gold">{num}</span>
      <h2 className="font-serif text-3xl md:text-4xl">{title}</h2>
      <div className="flex-1 h-px bg-line" />
      {children}
    </div>
  );
}

export default SectionHeader;
