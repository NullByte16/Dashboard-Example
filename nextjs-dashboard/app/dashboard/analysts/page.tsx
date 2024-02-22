import Profile from "@/app/ui/analysts/Profile";
import analysts from "@/app/lib/analysts";

export default function Page(){
    return (
        <Profile analyst={analysts["Ezra"]}></Profile>
    )
}