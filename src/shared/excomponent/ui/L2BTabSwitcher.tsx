import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"


export function TabSwitcher() {
  return (
    <Tabs defaultValue="Rental" className=" w-[225px] h-[48px]">
      <TabsList className="w-full h-full bg-neutral-6 rounded-[8px]">
        <TabsTrigger value="Rental">
          Rental
        </TabsTrigger>
        <TabsTrigger value="Material">
          Material
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
