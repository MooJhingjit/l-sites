import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScanSearchIcon } from "lucide-react"

export function GlobalSearch() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="space-x-1">
          <ScanSearchIcon className="h-5 w-5 mr-2" />
          <span>Search</span>

        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl rounded-3xl   border-none ring-0 p-0 top-[30%] ">
        <div className="relative ">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <ScanSearchIcon className="h-5 w-5 mr-2 dark:text-white/60" />
          </div>
          <Input placeholder="Search..." className=" pl-10 pr-4 py-6 text-xl w-full  dark:border-white/70 " />

        </div>
      </DialogContent>
    </Dialog>
  )
}
