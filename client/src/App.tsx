import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useEffect } from "react";

// Core Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsPage from "./pages/TermsPage";

// Practice Area Pages
import CriminalDefensePage from "./pages/practice/CriminalDefensePage";
import DUIDefensePage from "./pages/practice/DUIDefensePage";
import FelonyDefensePage from "./pages/practice/FelonyDefensePage";
import DomesticViolencePage from "./pages/practice/DomesticViolencePage";
import DrugCrimesPage from "./pages/practice/DrugCrimesPage";

// City Pages
import CityPage from "./pages/city/CityPage";

// Chat widget ID
const CHAT_WIDGET_ID = "6a3ed5ce00578e71d11aa88c";

function ChatWidget() {
  const [location] = useLocation();
  const isContactPage = location === "/pg/contact";

  useEffect(() => {
    const existingScript = document.getElementById("lc-chat-widget-script");

    if (isContactPage) {
      // Remove the script and widget on contact page
      if (existingScript) {
        existingScript.remove();
      }
      // Also remove any widget elements that may have been injected
      const widgetEls = document.querySelectorAll("[data-widget-id]");
      widgetEls.forEach((el) => el.remove());
      return;
    }

    // Add widget on all other pages
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "lc-chat-widget-script";
      script.src = "https://widgets.leadconnectorhq.com/loader.js";
      script.setAttribute("data-resources-url", "https://widgets.leadconnectorhq.com/chat-widget/loader.js");
      script.setAttribute("data-widget-id", CHAT_WIDGET_ID);
      document.body.appendChild(script);
    }
  }, [isContactPage]);

  return null;
}

function Router() {
  return (
    <Switch>
      {/* Root redirect */}
      <Route path="/" component={() => { window.location.replace("/pg/home"); return null; }} />

      {/* Core Pages */}
      <Route path="/pg/home" component={HomePage} />
      <Route path="/pg/about" component={AboutPage} />
      <Route path="/pg/contact" component={ContactPage} />
      <Route path="/pg/privacy-policy" component={PrivacyPolicyPage} />
      <Route path="/pg/terms-and-conditions" component={TermsPage} />

      {/* Practice Area Pages */}
      <Route path="/pg/criminal-defense-fresno" component={CriminalDefensePage} />
      <Route path="/pg/dui-defense-fresno" component={DUIDefensePage} />
      <Route path="/pg/felony-defense-fresno" component={FelonyDefensePage} />
      <Route path="/pg/domestic-violence-defense-fresno" component={DomesticViolencePage} />
      <Route path="/pg/drug-crimes-fresno" component={DrugCrimesPage} />

      {/* City Pages */}
      <Route path="/pg/fresno-criminal-defense-lawyer" component={() => <CityPage slug="fresno-criminal-defense-lawyer" />} />
      <Route path="/pg/clovis-criminal-defense-lawyer" component={() => <CityPage slug="clovis-criminal-defense-lawyer" />} />
      <Route path="/pg/madera-criminal-defense-lawyer" component={() => <CityPage slug="madera-criminal-defense-lawyer" />} />
      <Route path="/pg/sanger-criminal-defense-lawyer" component={() => <CityPage slug="sanger-criminal-defense-lawyer" />} />
      <Route path="/pg/visalia-criminal-defense-lawyer" component={() => <CityPage slug="visalia-criminal-defense-lawyer" />} />
      <Route path="/pg/tulare-criminal-defense-lawyer" component={() => <CityPage slug="tulare-criminal-defense-lawyer" />} />
      <Route path="/pg/hanford-criminal-defense-lawyer" component={() => <CityPage slug="hanford-criminal-defense-lawyer" />} />
      <Route path="/pg/merced-criminal-defense-lawyer" component={() => <CityPage slug="merced-criminal-defense-lawyer" />} />

      {/* 404 */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <ChatWidget />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
