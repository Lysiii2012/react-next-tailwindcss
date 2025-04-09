import { APP_NAME } from "@/lib/contants"

const Footer = () => {

    const currentYears = new Date().getFullYear()

    return(
        <footer className="border-t">
            <div className="p-5 flex-center">
                {currentYears} @{APP_NAME}
            </div>
        </footer>
    )
}
export default Footer