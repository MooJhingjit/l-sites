import { Input } from "@base_components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@base_components/ui/tabs";

export default function HeroSearchFilter() {
  return (
    <>
      <Tabs defaultValue="Buy" className="w-[200px] ">
        <TabsList className="grid w-full grid-cols-2 rounded-none rounded-tr-sm rounded-tl-sm ">
          <TabsTrigger className="text-sm rounded-sm" value="Buy">
            Buy
          </TabsTrigger>
          <TabsTrigger className="text-sm rounded-sm" value="Rent">
            Rent
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <Input
        placeholder="Search For Location or Place"
        className="rounded-none rounded-tr-sm rounded-br-sm rounded-bl-sm w-full bg-muted h-14 ring-0 outline-none border-none text-sm"
      />
    </>
  );
}
