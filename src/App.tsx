import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
//import Portfolio from "./pages/Portfolio";
// Ensure the file exists at ./pages/CaseStudy.tsx or adjust the import path accordingly
import CaseStudy from "./pages/CaseStudy";
import NotFound from "./pages/NotFound";
import Portfolio from "./components/Portfolio";

const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          {/* Your existing home/index route */}
          <Route path="/" element={<Index />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/case-study/:slug" element={<CaseStudy />} />
        

          {/* Catch-all must stay last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;
