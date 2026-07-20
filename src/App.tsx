import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout/Layout";
import { HomePage } from "@/pages/HomePage";
import { RedemptionPage } from "@/pages/RedemptionPage";
import { AwardsPage } from "@/pages/AwardsPage";
import { PrizesPage } from "@/pages/PrizesPage";
import { MaterialsPage } from "@/pages/MaterialsPage";
import { NotesPage } from "@/pages/NotesPage";
import { FaqPage } from "@/pages/FaqPage";
import { ContactPage } from "@/pages/ContactPage";

export default function App() {
  return (
    <Router basename="/agmc">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/guide/redemption" element={<RedemptionPage />} />
          <Route path="/guide/awards" element={<AwardsPage />} />
          <Route path="/guide/prizes" element={<PrizesPage />} />
          <Route path="/guide/materials" element={<MaterialsPage />} />
          <Route path="/guide/notes" element={<NotesPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/about/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
}
