import Button from "@/components/Button/Button";
import "tailwindcss/tailwind.css";

export default function Home() {
  return (
    <section>
      <Button intent="primary" content="Button label" />
      <Button intent="secondary" content="Button label" />
    </section>
  );
}
