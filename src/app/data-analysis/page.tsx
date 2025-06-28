"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function DataAnalysisSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="flex max-w-screen flex-col items-center gap-16 px-4 sm:px-20">
      <h1 className="text-4xl font-bold mt-20">
        Inventory-Driven Analysis of Wholesale Brands
      </h1>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Expanded view"
              width={1200}
              height={800}
              className="object-contain"
            />
          </div>
        </div>
      )}
      <AnalysisCard
        title="Introduction"
        description={
          <>
            <p className="mb-4">
              In this analysis, we will be looking at the top 20 performing
              products from a real inventory dataset from wholesale brands and
              uncover the factors driving their success. The dataset tracks
              inventory levels for each product over a defined time period, with
              recordings taken at regular timestamps. Because brands may account
              for inventory differently, and logging glitches may occur, I
              applied a series of data-cleaning steps before calculating total
              sales for each product.
            </p>
            <p className="mb-4">
              Product performance is based on the total sales of the product,
              which was calculated by finding the total decrease in inventory
              for the product. There were two main stats calculated for each
              product: number of sales, and inventory to sales ratio.
            </p>
            <p className="mb-4">
              My analysis will be broken into three main sections:
            </p>
            <ul>
              <li>
                <strong>1. Unpacking excellence</strong>
                <p></p>
              </li>
              <li>
                <strong>2. The Impact of Strategies and Events</strong>
                <p></p>
              </li>
              <li>
                <strong>3. Recommendations for Improvement</strong>
                <p></p>
              </li>
            </ul>
          </>
        }
      />
      <AnalysisCard
        title="Unpacking Excellence - Top 20 performing products"
        description={
          <>
            <p className="mb-4">
              The top 20 performing products were calculated by finding the
              total sales for each product.
            </p>
            <Image
              src="/reprally_graph1.png"
              alt="Top 20 Products Analysis"
              width={900}
              height={400}
              className="rounded-lg shadow-lg mb-4 cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setSelectedImage("/reprally_graph1.png")}
            />
            <p className="text-sm mb-24">Click to expand</p>
            {/* <h3 className="text-lg font-bold mb-12">
              1. Category & Brand Effects
            </h3> */}
            <div className="flex flex-row gap-8 mb-6">
              <div className="flex flex-col gap-4">
                <Image
                  src="/reprally_graph2.png"
                  alt="Top 20 Products Analysis"
                  width={2000}
                  height={2000}
                  className="rounded-lg shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setSelectedImage("/reprally_graph2.png")}
                />
                <p className="text-sm"> Click to expand</p>
              </div>
              <div className="flex flex-col gap-4">
                <p>
                  Looking at the top 20 products, what categories they belong
                  to, and which brands own them, this reveals a pronounced
                  concentration among three product types in the top 20
                  performers. Gummy Snacks account for 44% of sales in the top
                  20 products; within that category, a single brand alone claims
                  all of those sales. Cookies category occupy seven top-20
                  positions, solely driven by Lark Fine Foods brand&apos;s
                  lineup, while Granola Bars occupy space in the top 10, all
                  from the same brand as well. This clustering, where each high
                  performing category is dominated by a single brand, suggests
                  that both product type and brand-specific factors (such as
                  targeted promotions, supply reliability, or consumer loyalty)
                  play a critical role in driving sales success.
                </p>
                <p className="mb-4">
                  It&apos;s worth noting that brands track inventory
                  differently. For example, all Lark Fine Foods cookie products
                  in the top 20 share identical inventory records, suggesting
                  they could draw from a common stock pool (maybe not, it is
                  possible all products were bought in the same volume by a
                  single customer).
                </p>
              </div>
            </div>
            <h3 className="text-md font-bold mt-24 mb-4">
              Several factors likely combine to give these type of products the
              edge over the competition:
            </h3>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">
                <strong>Familiarity and Brand Trust:</strong> Gummies, cookies,
                and granola bars are well-established snack staples. Consumers
                know the taste profiles and have clear expectations—so
                there&apos;s less friction in the decision to purchase.
                Moreover, each category&apos;s leading brand has likely built
                trust through consistent quality or recognizable branding,
                reinforcing repeat purchases.
              </li>
              <li className="mb-2">
                <strong>Convenience and Accessibility:</strong> All of the
                leading products are grab-and-go snack items (gummy packs,
                cookie pouches, and small granola bags) that require zero prep.
                In today&apos;s fast paced retail environment, shoppers prize
                products they can toss in a backpack, purse, or gym bag without
                fuss. This &quot;anytime, anywhere&quot; accessibility drives
                frequent impulse purchases and repeat buys.
              </li>
              <li className="mb-2">
                <strong>Eye-catching, functional packaging:</strong> The
                dominant products share bright, resilient packaging that both
                stands out on the shelf and preserves freshness. Resealable
                pouches and individually wrapped portions mean less waste,
                easier portion control, and stronger perceived value. Attractive
                shelf presence plus practical usability creates a positive
                feedback loop: shoppers see the package, grab it, and enjoy the
                snack later without spill-over or staleness. sales.
              </li>
            </ul>
          </>
        }
      />
      <AnalysisCard
        title="The Impact of Strategies and Events"
        description={
          <>
            <p className="mb-4">
              To uncover hidden strategies behind top performers, I investigated
              two main signals discovered in the inventory trends of the top 20
              products:
            </p>
            <p className="mb-4">
              <strong>Synchronized Sales Spikes:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">
                I plotted the daily aggregate sales of the top-20 products over
                time and looked for dates where a large share (50%) of them saw
                above-average drops simultaneously across products within
                brands.
              </li>
              <li>
                In other words, when one gummy snack surges, its sibling SKUs
                rise on the same date, one plausible explanation is co-marketing
                or bundling at the wholesale/distributor level. The products go
                together nicely so as a retailer buying in bulk, it&apos;s
                convenient to reorder a complete set in a single transaction,
                whether through bundle discounts, shared shelf-space deals, or
                promotional packs, driving simultaneous inventory and sales
                spikes across that brand&apos;s lineup.
              </li>
            </ul>
            <p className="mb-4">
              <strong>Rapid Restocking:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">
                The inventory over time chart shows that the top 20 products
                deal with huge spikes in inventory and are able to restock to
                max capacity within days. This suggest a robust supply chain and
                strong demand forecasting that allows them to restock quickly.
              </li>
            </ul>
          </>
        }
      />
      <AnalysisCard
        title="Recommendations for Improvement"
        description={
          <>
            <p className="mb-4">
              I&apos;ve also identified the bottom 40 performing products based
              on a calculated sales to inventory ratio. I could not determine
              bottom 40 performance based solely on sales, because many products
              in the dataset may have had little to no items in stock. The worst
              performing products are the ones with lots of inventory, but
              little to none of it moves.
            </p>
            <p className="mb-4">
              Looking at the bottom 40, there&apos;s a clear trend: many are
              chocolate bars and cookies of unique or niche flavor names. What I
              believe makes these products perform poorly is a mix between
              product selection, branding, reputability, and niche flavors.
            </p>
            <p className="mb-4">
              Looking at the worst performing product for example &quot;White
              Mulberry, Almond, Fennel Date-Sweetened Dark Chocolate&quot; I can
              already tell multiple problems with it. White mulberry and fennel
              aren&apos;t mainstream snack flavors, so it appeals to a much
              narrower audience. In contrast, gummies, cookies, or classic
              granola flavors have broad, habitual followings. Furthermore,
              Date-sweetened dark chocolate typically carries a premium price
              tag, which some retail stores may avoid because they prioritize
              convenience over premium. Shoppers grabbing a quick snack often
              favor lower cost, familiar options. And finally, stores are
              looking to buy volumes of recognizable products. &quot;White
              mulberry,&quot; &quot;fennel,&quot; &quot;date-sweetened&quot; is
              confusing and at a glance it is hard to even tell what this
              product is.
            </p>
            <p className="mb-4">
              These issues are present across many low performing products. They
              simply don&apos;t match what independent retailers and their
              customers prioritize. Here are my key recommendations:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">
                <strong>Rebrand for Target Market:</strong> Focus on appealing
                to convenience stores, general shops, and small markets
              </li>
              <li className="mb-2">
                <strong>Align with Store Priorities:</strong> Emphasize
                convenience, reliability, and familiarity over niche or complex
                flavors
              </li>
              <li className="mb-2">
                <strong>Product Naming:</strong> Keep names clear, concise, and
                descriptive - products should be instantly understandable
              </li>
              <li className="mb-2">
                <strong>Inventory Strategy:</strong> Focus on stocking more of
                the high-performing products that are likely to sell
              </li>
              <li className="mb-2">
                <strong>Avoid Niche Flavors:</strong> Steer clear of overly
                unique or complex flavor combinations that appeal to narrow
                audiences
              </li>
              <li className="mb-2">
                <strong>Price Point Consideration:</strong> Be mindful of
                premium pricing, as convenience stores often prioritize
                lower-cost, familiar options
              </li>
              <li className="mb-2">
                <strong>Product Bundling Capabilities:</strong> Product lines or
                product bundles can be appealing to independent retailers.
              </li>
            </ul>
            {/* <p>
              Ultimately, it comes down to finding the right balance betwe
            </p> */}
          </>
        }
      />
    </div>
  );
}

function AnalysisCard({
  title,
  description,
}: {
  title: string;
  description: React.ReactNode;
}) {
  return (
    <div className="flex sm:flex-row flex-col w-full items-center sm:items-start gap-16 border-2 rounded-lg">
      <div className="flex flex-col items-start gap-4 p-6 sm:p-18">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="text-sm">{description}</div>
      </div>
    </div>
  );
}
