import CardGrid from "@/components/Products/CardGrid";

export default function Sneakers() {
  return (
    <div className="flex gap-12">
      <div className="w-[16rem] hidden md:block">Filter panel</div>
      <div className="w-full">
        <CardGrid />
      </div>
    </div>
  );
}
