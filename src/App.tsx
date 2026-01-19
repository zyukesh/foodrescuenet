import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WorkInProgress from "./pages/WorkInProgress";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/donate" element={<WorkInProgress />} />
          <Route path="/find-food" element={<WorkInProgress />} />
          <Route path="/sign-in" element={<WorkInProgress />} />
          <Route path="/register-donor" element={<WorkInProgress />} />
          <Route path="/register-ngo" element={<WorkInProgress />} />
          <Route path="/register-volunteer" element={<WorkInProgress />} />
          <Route path="/partner" element={<WorkInProgress />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
