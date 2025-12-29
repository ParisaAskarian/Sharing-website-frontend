"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

export default function ListingDetailPage() {
  const { id } = useParams();

  // داده نمونه (بعداً از DB می‌آید)
  const [title, setTitle] = useState("دوربین DSLR Canon");
  const [dailyFee, setDailyFee] = useState("150000");
  const [status, setStatus] = useState("active");
  const [description, setDescription] = useState(
    "دوربین سالم، مناسب عکاسی حرفه‌ای"
  );

  function saveChanges() {
    // TODO: Server Action / API
    console.log({
      id,
      title,
      dailyFee,
      status,
      description,
    });

    alert("تغییرات ذخیره شد");
  }

  return (
    <div className="max-w-3xl space-y-8">
      {/* Header */}
      <header>
        <h1 className="text-2xl font-bold">
          ویرایش آگهی
        </h1>
        <p className="text-slate-500 mt-1">
          شناسه آگهی: {id}
        </p>
      </header>

      {/* Form */}
      <div className="bg-white rounded-2xl shadow p-6 space-y-5">
        <FormItem label="عنوان آگهی">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-xl px-4 py-2"
          />
        </FormItem>

        <FormItem label="توضیحات">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="w-full border rounded-xl px-4 py-2"
          />
        </FormItem>

        <FormItem label="قیمت روزانه (تومان)">
          <input
            type="number"
            value={dailyFee}
            onChange={(e) => setDailyFee(e.target.value)}
            className="w-full border rounded-xl px-4 py-2"
          />
        </FormItem>

        <FormItem label="وضعیت آگهی">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border rounded-xl px-4 py-2"
          >
            <option value="active">فعال</option>
            <option value="inactive">غیرفعال</option>
          </select>
        </FormItem>

        {/* Actions */}
        <div className="flex gap-3 pt-4">
          <button
            onClick={saveChanges}
            className="px-6 py-2 rounded-xl bg-slate-900 text-white"
          >
            ذخیره تغییرات
          </button>

          <button
            onClick={() => history.back()}
            className="px-6 py-2 rounded-xl bg-slate-200"
          >
            بازگشت
          </button>
        </div>
      </div>
    </div>
  );
}

function FormItem({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1">
      <label className="text-sm text-slate-600">
        {label}
      </label>
      {children}
    </div>
  );
}
