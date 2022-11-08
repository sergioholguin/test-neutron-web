import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/App.scss";
import Layout from "../components/Layout";
import { SideBarContextProvider } from "../components/SideBar/SideBarContext";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div>
            <SideBarContextProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </SideBarContextProvider>
        </div>
    );
}

export default MyApp;
