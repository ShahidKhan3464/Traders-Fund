import Dashboard from "../../images/adminicons/001-homepage.svg";
import Leadership from "../../images/adminicons/013-chat.svg";
import Certificates from "../../images/adminicons/003-group.svg";
import Billings from "../../images/adminicons/Frame.svg";
import Products from "../../images/adminicons/007-invoice.svg";
import Traders from "../../images/adminicons/Frame-1.svg";
import Referral from "../../images/adminicons/Frame-2.svg";
import Wallet from "../../images/adminicons//Frame 34128.svg";
import Academy from "../../images/adminicons//Frame-3.svg";
import Download from "../../images/adminicons/Frame-4.svg";
import kyc from "../../images/adminicons/Frame-6.svg";
import products from "../../images/adminicons/Frame-5.svg";

// ----------------------SIDEBAR LINKS------------------
export const AdminSidebarData = [
  {
    title: "Overview",
    icon: Dashboard,
    link: "/admin/overview",
    cName: "sidebar-title",
  },
  {
    title: "Messaging",
    icon: Leadership,
    link: "/admin/messaging",
    cName: "sidebar-title",
  },
  {
    title: "Traders",
    icon: Certificates,
    link: "/admin/traders",
    cName: "sidebar-title",
  },
  {
    title: "Challenges",
    icon: Billings,
    link: "/admin/challenges",
    cName: "sidebar-title",
  },
  {
    title: "Invoicing",
    icon: Products,
    link: "/admin/invoicing",
    cName: "sidebar-title",
  },
  {
    title: "Payout",
    icon: Traders,
    link: "/admin/payout",
    cName: "sidebar-title",
  },
  {
    title: "Revenue",
    icon: Referral,
    link: "/admin/revenue",
    cName: "sidebar-title",
  },

  {
    title: "Discount",
    icon: Wallet,
    link: "/admin/discount",
    cName: "sidebar-title",
  },
  {
    title: "Staff",
    icon: Academy,
    link: "/admin/staff",
    cName: "sidebar-title",
  },
  {
    title: "Referrals",
    icon: Download,
    link: "/admin/referrals",
    cName: "sidebar-title",
  },
  {
    title: "Products",
    icon: products,
    link: "/admin/products",
    cName: "sidebar-title",
  },
  {
    title: "KYC",
    icon: kyc,
    link: "/admin/kyc",
    cName: "sidebar-title",
  },
  {
    title: "Settings",
    icon: "",
    link: "/admin/settings",
    cName: "sidebar-title",
  },
  {
    title: "Back to website",
    icon: "Login",
    link: "/",
    cName: "sidebar-title",
  },
];
