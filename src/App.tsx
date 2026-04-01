import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Uslugi from "./pages/Uslugi";
import BazaWiedzy from "./pages/BazaWiedzy";
import ONas from "./pages/ONas";
import Kontakt from "./pages/Kontakt";
import Dziekujemy from "./pages/Dziekujemy";
import PolitykaPrywatnosci from "./pages/PolitykaPrywatnosci";
import Regulamin from "./pages/Regulamin";
import ServiceDetail from "./pages/ServiceDetail";
import ArticleDetail from "./pages/ArticleDetail";
import NotFound from "./pages/NotFound";
import { ScrollToTop } from "./components/ScrollToTop";
import CookieBanner from "./components/CookieBanner";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <CookieBanner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/uslugi" element={<Uslugi />} />
            <Route path="/uslugi/:serviceSlug" element={<ServiceDetail />} />
            <Route path="/uslugi/:serviceSlug/:subServiceSlug" element={<ServiceDetail />} />
            <Route path="/baza-wiedzy" element={<BazaWiedzy />} />
            <Route path="/baza-wiedzy/:articleSlug" element={<ArticleDetail />} />
            <Route path="/o-nas" element={<ONas />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/dziekujemy" element={<Dziekujemy />} />
            <Route path="/polityka-prywatnosci" element={<PolitykaPrywatnosci />} />
            <Route path="/regulamin" element={<Regulamin />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
