import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Layout } from "@/components/Layout";
import { Home } from "@/pages/Home";
import { MaterialDetail } from "@/pages/MaterialDetail";
import { Quote } from "@/pages/Quote";
import { QuoteSummary } from "@/pages/QuoteSummary";
import { Booking } from "@/pages/Booking";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/vinyl">
          {() => <MaterialDetail materialId="vinyl" />}
        </Route>
        <Route path="/aluminum">
          {() => <MaterialDetail materialId="aluminum" />}
        </Route>
        <Route path="/wood-clad">
          {() => <MaterialDetail materialId="wood-clad" />}
        </Route>
        <Route path="/upvc">
          {() => <MaterialDetail materialId="upvc" />}
        </Route>
        <Route path="/quote" component={Quote} />
        <Route path="/quote-summary" component={QuoteSummary} />
        <Route path="/booking" component={Booking} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
