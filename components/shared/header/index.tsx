import { ShoppingCartIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/contants";

const Header = () => {
    return(
        <header className="w-full border-b">
            <div className="wrapper flex-between">
                <div className="flex-start">
                    <Link href="/">
                       <Image src="/images/logo.svg" alt={`${APP_NAME}`} width={50} height={50}  priority={true}></Image>
                    </Link>
                    <span className="hidden lg:block font-bolt text-2xl ml-3">{APP_NAME}</span>
                </div>
                <div className="space-x-2">
                    <Button asChild variant="ghost">
                            <Link href="/cart">
                                <ShoppingCartIcon/>Кошик 
                            </Link>
                    </Button>
                    <Button asChild variant="ghost">
                            <Link href="/sign-in">
                                <UserIcon/>Увiйти 
                            </Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header