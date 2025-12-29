"use client";

import { useState } from "react";

type Listing = {
  id: number;
  title: string;
  dailyFee: number;
  category: string;
  owner: string;
  status: "available" | "unavailable";
};

export default function ListingsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const listings: Listing[] = [
    {
      id: 1,
      title: "دوربین DSLR Canon",
      dailyFee: 150000,
      category: "الکترونیک",
      owner: "علی محمدی",
      status: "available",
    },
    {
      id: 2,
      title: "پلی‌استیشن 5",
      dailyFee: 200000,
      category: "بازی و سرگرمی",
      owner: "محمد رضایی",
      status: "available",
    },
    {
      id: 3,
      title: "دریل برقی",
      dailyFee: 80000,
      category: "ابزار",
      owner: "رضا احمدی",
      status: "unavailable",
    },
  ];

  // ⭐ فیلتر اصلی
  const filteredListings =
    selectedCategory === "all"
      ? listings
      : listings.filter(
          (listing) => listing.category === selectedCategory
        );

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-2xl font-semibold">آگهی‌ها</h1>
        </div>
      </header>

      <main className="my-8">
        <div className="container mx-auto px-6 flex gap-6">
          {/* Filters */}
          <aside className="w-64 space-y-4">
            <h2 className="font-semibold">دسته‌بندی</h2>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
            >
              <option value="all">همه دسته‌بندی‌ها</option>
              <option value="الکترونیک">الکترونیک</option>
              <option value="بازی و سرگرمی">بازی و سرگرمی</option>
              <option value="ابزار">ابزار</option>
            </select>
          </aside>

          {/* Listings */}
          <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 flex-1">
            {filteredListings.length === 0 ? (
              <p className="text-slate-500">
                آگهی‌ای برای این دسته‌بندی پیدا نشد
              </p>
            ) : (
              filteredListings.map((listing) => (
                <div
                  key={listing.id}
                  className="rounded-2xl shadow bg-white overflow-hidden"
                >
                  <div className="h-48 bg-slate-200" />

                  <div className="p-5 space-y-2">
                    <h3 className="font-semibold">{listing.title}</h3>

                    <p className="text-sm text-slate-500">
                      دسته‌بندی: {listing.category}
                    </p>

                    <p className="font-bold">
                      {listing.dailyFee.toLocaleString()} تومان / روز
                    </p>
                  </div>
                </div>
              ))
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
