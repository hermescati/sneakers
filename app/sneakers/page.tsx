import CardGrid from "@/components/Products/CardGrid";

export default function Sneakers() {
  return (
    <div className="flex">
      <div className="w-1/4 hidden md:block">Filter panel</div>
      <div className="w-3/4">
        <CardGrid />
      </div>
    </div>
  );
}
