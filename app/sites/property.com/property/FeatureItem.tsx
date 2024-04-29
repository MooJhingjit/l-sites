import { Label } from "@/components/ui/label";

const FeatureItem = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => {
  return (
    <div className="flex items-center space-x-2 p-4 bg-muted justify-center rounded-md text-muted-foreground">
      <div className="">{icon}</div>
      <Label>{label}</Label>
    </div>
  );
};

export default FeatureItem;