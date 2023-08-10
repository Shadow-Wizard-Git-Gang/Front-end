import { Welcome } from "./components/HomeWelcome";
import { Login } from "./components/HomeLogin";
import { News } from "./components/HomeNews";
import { User } from "./components/HomeUser";
import { Statistics } from "./components/HomeStatistics";
import { ContactUs } from "./components/HomeContactUs";


export const Home = () => {
    return <div className="Home">
        <Welcome />
        <Login />
        <News />
        <User />
        <Statistics />
        <ContactUs />
    </div>
}