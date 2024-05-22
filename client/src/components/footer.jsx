import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return ( 
    <div className="bg-[#f8f8f8] border-t border-[#dbdbdb] py-11 px-3">
      <div className="w-full max-w-[960px] mx-auto">
        <div className="w-full flex gap-8 max-lg:flex-wrap">
          <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div>
              <p className="mb-2">Credit Card Quick Links</p>
              <div className="flex flex-col gap-1">
                <a className="text-[#2477ab]">All Credit Cards</a>
                <a className="text-[#2477ab]">See if you're prequalified</a>
                <a className="text-[#2477ab]">Respond to Mail Offer</a>
                <a className="text-[#2477ab]">Check Application Status</a>
                <a className="text-[#2477ab]">Cardmember Agreement</a>
                <a className="text-[#2477ab]">Credit Card Benefits</a>
                <a className="text-[#2477ab]">ATM Locator</a>
              </div>
            </div>
            <div>
              <p className="mb-2">Credit Card Categories</p>
              <div className="flex flex-col gap-1">
                <a className="text-[#2477ab]">Cash Back Credit Cards</a>
                <a className="text-[#2477ab]">Student Credit Cards</a>
                <a className="text-[#2477ab]">Secured Credit Card</a>
                <a className="text-[#2477ab]">Travel Credit Card</a>
                <a className="text-[#2477ab]">Compare Credit Cards</a>
              </div>
            </div>
            <div>
              <p className="mb-2">Credit Card Features</p>
              <div className="flex flex-col gap-1">
                <a className="text-[#2477ab]">Balance Transfer Credit Cards</a>
                <a className="text-[#2477ab]">Credit Cards to Build Credit</a>
                <a className="text-[#2477ab]">No Annual Fee Credit Cards</a>
                <a className="text-[#2477ab]">Intro APR Credit Cards</a>
                <a className="text-[#2477ab]">Airline Travel Credit Card</a>
                <a className="text-[#2477ab]">Credit Cards for No Credit</a>
              </div>
            </div>
            <div>
              <p className="mb-2">Card Smarts & More</p>
              <div className="flex flex-col gap-1">
                <a className="text-[#2477ab]">Card Smarts</a>
                <a className="text-[#2477ab]">Getting a Credit Card</a>
                <a className="text-[#2477ab]">Using a Credit Card</a>
                <a className="text-[#2477ab]">Credit Card Rewards</a>
                <a className="text-[#2477ab]">
                  Credit Card Interest Calculator
                </a>
              </div>
            </div>
            <div>
              <p className="mb-2">Rewards</p>
              <div className="flex flex-col gap-1">
                <a className="text-[#2477ab]">Rewards Credit Cards</a>
                <a className="text-[#2477ab]">Cash Back Rewards</a>
                <a className="text-[#2477ab]">5% Cashback Bonus®</a>
                <a className="text-[#2477ab]">Redeem Cashback Bonus</a>
                <a className="text-[#2477ab]">Refer a Friend</a>
              </div>
            </div>
            <div>
              <p className="mb-2">More Discover Products</p>
              <div className="flex flex-col gap-1">
                <a className="text-[#2477ab]">Banking</a>
                <a className="text-[#2477ab]">Home Equity Loans</a>
                <a className="text-[#2477ab]">Mortgage Refinance</a>
                <a className="text-[#2477ab]">Personal Loans</a>
                <a className="text-[#2477ab]">Student Loans</a>
                <a className="text-[#2477ab]">Debt Consolidation</a>
              </div>
            </div>
            <div>
              <p className="mb-2">Quicklinks</p>
              <div className="flex flex-col gap-1">
                <a className="text-[#2477ab]">Sitemap</a>
                <a className="text-[#2477ab]">Terms of Use</a>
                <a className="text-[#2477ab]">Accessibility</a>
                <a className="text-[#2477ab]">Browser Support</a>
                <a className="text-[#2477ab]">Security</a>
                <a className="text-[#2477ab]">Privacy</a>
                <a className="text-[#2477ab]">AdChoices</a>
              </div>
            </div>
            <div>
              <p className="mb-2">About Us</p>
              <div className="flex flex-col gap-1">
                <a className="text-[#2477ab]">Contact Us</a>
                <a className="text-[#2477ab]">About Discover</a>
                <a className="text-[#2477ab]">ESG</a>
                <a className="text-[#2477ab]">Investor Relations</a>
                <a className="text-[#2477ab]">Newsroom</a>
                <a className="text-[#2477ab]">Careers</a>
                <a className="text-[#2477ab]">Accept Discover</a>
                <a className="text-[#2477ab]">Diversity & Inclusion</a>
              </div>
            </div>
          </div>
          <div className="max-md:w-full md:min-w-[100px] md:w-[100px]">
            <div className="flex flex-wrap w-full justify-center md:justify-between gap-4">
              <FaTwitterSquare
                size={40}
                fill="#55acee"
              />
              <FaFacebookSquare
                size={40}
                fill="#3a5899"
              />
              <FaInstagram
                size={40}
                fill="#ce2e95"
              />
              <FaLinkedin
                size={40}
                fill="#0877b5"
              />
            </div>
          </div>
        </div>
        <div className="pt-10 mt-10 border-t border-[#dbdbdb]">
          <p className="text-xs text-center">
            ©2024 Discover Bank, Member FDIC
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
