import React from "react";

function Footer() {
    return (
        <footer className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white">
            <div className="max-w-7xl mx-auto py-10 px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-2xl font-bold">MEGA BLOG</h3>
                    <p className="text-sm mt-2">© 2025 HackHatch. All Rights Reserved.</p>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-2">Company</h4>
                    <ul className="space-y-1 text-sm">
                        <li><a href="#" className="hover:underline">Features</a></li>
                        <li><a href="#" className="hover:underline">Pricing</a></li>
                        <li><a href="#" className="hover:underline">Affiliate Program</a></li>
                        <li><a href="#" className="hover:underline">Press Kit</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-2">Support</h4>
                    <ul className="space-y-1 text-sm">
                        <li><a href="#" className="hover:underline">Account</a></li>
                        <li><a href="#" className="hover:underline">Help</a></li>
                        <li><a href="#" className="hover:underline">Contact Us</a></li>
                        <li><a href="#" className="hover:underline">Customer Support</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-2">Legals</h4>
                    <ul className="space-y-1 text-sm">
                        <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="#" className="hover:underline">Licensing</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
