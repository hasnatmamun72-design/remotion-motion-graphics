// src/cues.ts — Normalized and paginated subtitle cues
export interface SubtitlePage {
  pageIndex: number;
  text: string;
  startFrame: number;
  endFrame: number;
}

export interface CueItem {
  id: number;
  startFrame: number;
  endFrame: number;
  startSec: number;
  endSec: number;
  text: string;
  pages: SubtitlePage[];
}

export const cues: CueItem[] = [
  {
    "id": 1,
    "startFrame": 4,
    "endFrame": 73,
    "startSec": 0.14,
    "endSec": 2.42,
    "text": "একটা খালি ফোল্ডার। ভেতরে কিছুই নেই।",
    "pages": [
      {
        "pageIndex": 0,
        "text": "একটা খালি ফোল্ডার। ভেতরে কিছুই নেই।",
        "startFrame": 4,
        "endFrame": 73
      }
    ]
  },
  {
    "id": 2,
    "startFrame": 94,
    "endFrame": 245,
    "startSec": 3.14,
    "endSec": 8.18,
    "text": "আট দিন পর সেখান থেকেই বেরিয়ে এল একটা পুরো operating system, যেটা সত্যিকারের laptop-এ",
    "pages": [
      {
        "pageIndex": 0,
        "text": "আট দিন পর সেখান থেকেই বেরিয়ে এল একটা পুরো operating",
        "startFrame": 94,
        "endFrame": 186
      },
      {
        "pageIndex": 1,
        "text": "system, যেটা সত্যিকারের laptop-এ",
        "startFrame": 186,
        "endFrame": 245
      }
    ]
  },
  {
    "id": 3,
    "startFrame": 245,
    "endFrame": 387,
    "startSec": 8.18,
    "endSec": 12.9,
    "text": "চালু হয়। আছে login screen, file storage, এমনকি নিজস্ব driver-ও।",
    "pages": [
      {
        "pageIndex": 0,
        "text": "চালু হয়। আছে login screen, file storage, এমনকি",
        "startFrame": 245,
        "endFrame": 349
      },
      {
        "pageIndex": 1,
        "text": "নিজস্ব driver-ও।",
        "startFrame": 349,
        "endFrame": 387
      }
    ]
  },
  {
    "id": 4,
    "startFrame": 407,
    "endFrame": 541,
    "startSec": 13.56,
    "endSec": 18.04,
    "text": "একজন engineer শুধু কাজটা ধরিয়ে দিয়েছিলেন। বাকিটা করেছে Anthropic-এর নতুন",
    "pages": [
      {
        "pageIndex": 0,
        "text": "একজন engineer শুধু কাজটা ধরিয়ে দিয়েছিলেন। বাকিটা",
        "startFrame": 407,
        "endFrame": 498
      },
      {
        "pageIndex": 1,
        "text": "করেছে Anthropic-এর নতুন",
        "startFrame": 498,
        "endFrame": 541
      }
    ]
  },
  {
    "id": 5,
    "startFrame": 541,
    "endFrame": 621,
    "startSec": 18.04,
    "endSec": 20.7,
    "text": "AI model Claude Fable 5.2।",
    "pages": [
      {
        "pageIndex": 0,
        "text": "AI model Claude Fable 5.2।",
        "startFrame": 541,
        "endFrame": 621
      }
    ]
  },
  {
    "id": 6,
    "startFrame": 650,
    "endFrame": 848,
    "startSec": 21.68,
    "endSec": 28.28,
    "text": "৯ নভেম্বর Anthropic আনল দুটো model: Claude Fable 5.2 আর Claude Mythos 5.2। নাম",
    "pages": [
      {
        "pageIndex": 0,
        "text": "৯ নভেম্বর Anthropic আনল দুটো model: Claude Fable 5.2",
        "startFrame": 650,
        "endFrame": 782
      },
      {
        "pageIndex": 1,
        "text": "আর Claude Mythos 5.2। নাম",
        "startFrame": 782,
        "endFrame": 848
      }
    ]
  },
  {
    "id": 7,
    "startFrame": 848,
    "endFrame": 1035,
    "startSec": 28.28,
    "endSec": 34.5,
    "text": "আলাদা, কিন্তু ভেতরের brain একই। ভাবো, একটাই গাড়ি, কিন্তু দুটো আলাদা চাবি। Fable",
    "pages": [
      {
        "pageIndex": 0,
        "text": "আলাদা, কিন্তু ভেতরের brain একই। ভাবো, একটাই গাড়ি,",
        "startFrame": 848,
        "endFrame": 965
      },
      {
        "pageIndex": 1,
        "text": "কিন্তু দুটো আলাদা চাবি। Fable",
        "startFrame": 965,
        "endFrame": 1035
      }
    ]
  },
  {
    "id": 8,
    "startFrame": 1035,
    "endFrame": 1193,
    "startSec": 34.5,
    "endSec": 39.76,
    "text": "হ্যাকিং আর lab biology-র মতো ঝুঁকিপূর্ণ কাজে শক্ত সুরক্ষা বসানো আছে। তাই এটা সবাই",
    "pages": [
      {
        "pageIndex": 0,
        "text": "হ্যাকিং আর lab biology-র মতো ঝুঁকিপূর্ণ কাজে শক্ত",
        "startFrame": 1035,
        "endFrame": 1131
      },
      {
        "pageIndex": 1,
        "text": "সুরক্ষা বসানো আছে। তাই এটা সবাই",
        "startFrame": 1131,
        "endFrame": 1193
      }
    ]
  },
  {
    "id": 9,
    "startFrame": 1193,
    "endFrame": 1244,
    "startSec": 39.76,
    "endSec": 41.46,
    "text": "ব্যবহার করতে পারে। আর Mythos?",
    "pages": [
      {
        "pageIndex": 0,
        "text": "ব্যবহার করতে পারে। আর Mythos?",
        "startFrame": 1193,
        "endFrame": 1244
      }
    ]
  },
  {
    "id": 10,
    "startFrame": 1263,
    "endFrame": 1435,
    "startSec": 42.1,
    "endSec": 47.82,
    "text": "সেটা পায় শুধু যাচাই করা cyber security আর life science প্রতিষ্ঠান। তাহলে এত বড় কাজ",
    "pages": [
      {
        "pageIndex": 0,
        "text": "সেটা পায় শুধু যাচাই করা cyber security আর life",
        "startFrame": 1263,
        "endFrame": 1359
      },
      {
        "pageIndex": 1,
        "text": "science প্রতিষ্ঠান। তাহলে এত বড় কাজ",
        "startFrame": 1359,
        "endFrame": 1435
      }
    ]
  },
  {
    "id": 11,
    "startFrame": 1435,
    "endFrame": 1620,
    "startSec": 47.82,
    "endSec": 54.0,
    "text": "সামলায় কীভাবে? উত্তর teamwork। Fable একা কাজ করে না। সে manager-এর মতো হাজারখানেক AI",
    "pages": [
      {
        "pageIndex": 0,
        "text": "সামলায় কীভাবে? উত্তর teamwork। Fable একা কাজ করে",
        "startFrame": 1435,
        "endFrame": 1542
      },
      {
        "pageIndex": 1,
        "text": "না। সে manager-এর মতো হাজারখানেক AI",
        "startFrame": 1542,
        "endFrame": 1620
      }
    ]
  },
  {
    "id": 12,
    "startFrame": 1620,
    "endFrame": 1819,
    "startSec": 54.0,
    "endSec": 60.62,
    "text": "সহকারী, যাদের বলে subagent, মাঠে নামায়। কেউ code লেখে, কেউ test করে, কেউ review",
    "pages": [
      {
        "pageIndex": 0,
        "text": "সহকারী, যাদের বলে subagent, মাঠে নামায়। কেউ code",
        "startFrame": 1620,
        "endFrame": 1742
      },
      {
        "pageIndex": 1,
        "text": "লেখে, কেউ test করে, কেউ review",
        "startFrame": 1742,
        "endFrame": 1819
      }
    ]
  },
  {
    "id": 13,
    "startFrame": 1819,
    "endFrame": 1982,
    "startSec": 60.62,
    "endSec": 66.06,
    "text": "করে। Operating system-এর বেলায় এক হাজারের বেশি সহকারী টানা আট দিন কাজ করেছে।",
    "pages": [
      {
        "pageIndex": 0,
        "text": "করে। Operating system-এর বেলায় এক হাজারের বেশি",
        "startFrame": 1819,
        "endFrame": 1918
      },
      {
        "pageIndex": 1,
        "text": "সহকারী টানা আট দিন কাজ করেছে।",
        "startFrame": 1918,
        "endFrame": 1982
      }
    ]
  },
  {
    "id": 14,
    "startFrame": 2003,
    "endFrame": 2165,
    "startSec": 66.76,
    "endSec": 72.18,
    "text": "আরেকটা উদাহরণ Fermat's Last Theorem। এই বিখ্যাত গাণিতিক প্রমাণকে কম্পিউটার দিয়ে",
    "pages": [
      {
        "pageIndex": 0,
        "text": "আরেকটা উদাহরণ Fermat's Last Theorem। এই বিখ্যাত",
        "startFrame": 2003,
        "endFrame": 2098
      },
      {
        "pageIndex": 1,
        "text": "গাণিতিক প্রমাণকে কম্পিউটার দিয়ে",
        "startFrame": 2098,
        "endFrame": 2165
      }
    ]
  },
  {
    "id": 15,
    "startFrame": 2165,
    "endFrame": 2338,
    "startSec": 72.18,
    "endSec": 77.94,
    "text": "ধাপে ধাপে যাচাই করার ভাষায় অনুবাদ করতে আগেরবার লেগেছিল ১১ দিন। Fable-এর এক হাজার",
    "pages": [
      {
        "pageIndex": 0,
        "text": "ধাপে ধাপে যাচাই করার ভাষায় অনুবাদ করতে আগেরবার",
        "startFrame": 2165,
        "endFrame": 2265
      },
      {
        "pageIndex": 1,
        "text": "লেগেছিল ১১ দিন। Fable-এর এক হাজার",
        "startFrame": 2265,
        "endFrame": 2338
      }
    ]
  },
  {
    "id": 16,
    "startFrame": 2338,
    "endFrame": 2540,
    "startSec": 77.94,
    "endSec": 84.68,
    "text": "agent-এর দল সেটা করেছে মাত্র ৩০ ঘণ্টায়। চারটা উদাহরণ দেখি। এক, coding। Anthropic",
    "pages": [
      {
        "pageIndex": 0,
        "text": "agent-এর দল সেটা করেছে মাত্র ৩০ ঘণ্টায়। চারটা",
        "startFrame": 2338,
        "endFrame": 2453
      },
      {
        "pageIndex": 1,
        "text": "উদাহরণ দেখি। এক, coding। Anthropic",
        "startFrame": 2453,
        "endFrame": 2540
      }
    ]
  },
  {
    "id": 17,
    "startFrame": 2540,
    "endFrame": 2726,
    "startSec": 84.68,
    "endSec": 90.88,
    "text": "নিজেদের codebase-এ যত পরিবর্তন যুক্ত হয়, তার ৯০ শতাংশের বেশি এখন Claude লেখে",
    "pages": [
      {
        "pageIndex": 0,
        "text": "নিজেদের codebase-এ যত পরিবর্তন যুক্ত হয়, তার ৯০",
        "startFrame": 2540,
        "endFrame": 2656
      },
      {
        "pageIndex": 1,
        "text": "শতাংশের বেশি এখন Claude লেখে",
        "startFrame": 2656,
        "endFrame": 2726
      }
    ]
  },
  {
    "id": 18,
    "startFrame": 2726,
    "endFrame": 2872,
    "startSec": 90.88,
    "endSec": 95.72,
    "text": "মানুষের নির্দেশনায়। একটা production service Python থেকে Rust-এ নেওয়া হয়েছে, আর",
    "pages": [
      {
        "pageIndex": 0,
        "text": "মানুষের নির্দেশনায়। একটা production service Python",
        "startFrame": 2726,
        "endFrame": 2818
      },
      {
        "pageIndex": 1,
        "text": "থেকে Rust-এ নেওয়া হয়েছে, আর",
        "startFrame": 2818,
        "endFrame": 2872
      }
    ]
  },
  {
    "id": 19,
    "startFrame": 2872,
    "endFrame": 2942,
    "startSec": 95.72,
    "endSec": 98.06,
    "text": "সেটা এখন প্রায় ২৬ গুণ দ্রুত চলে।",
    "pages": [
      {
        "pageIndex": 0,
        "text": "সেটা এখন প্রায় ২৬ গুণ দ্রুত চলে।",
        "startFrame": 2872,
        "endFrame": 2942
      }
    ]
  },
  {
    "id": 20,
    "startFrame": 2966,
    "endFrame": 3130,
    "startSec": 98.88,
    "endSec": 104.34,
    "text": "দুই, hardware। মাত্র এক অনুচ্ছেদের নির্দেশনা থেকে তিনটা device: একটা voice",
    "pages": [
      {
        "pageIndex": 0,
        "text": "দুই, hardware। মাত্র এক অনুচ্ছেদের নির্দেশনা থেকে",
        "startFrame": 2966,
        "endFrame": 3075
      },
      {
        "pageIndex": 1,
        "text": "তিনটা device: একটা voice",
        "startFrame": 3075,
        "endFrame": 3130
      }
    ]
  },
  {
    "id": 21,
    "startFrame": 3130,
    "endFrame": 3305,
    "startSec": 104.34,
    "endSec": 110.18,
    "text": "assistant hub, একটা USB speakerphone আর একটা virtual pet। Circuit board, casing আর",
    "pages": [
      {
        "pageIndex": 0,
        "text": "assistant hub, একটা USB speakerphone আর একটা virtual",
        "startFrame": 3130,
        "endFrame": 3241
      },
      {
        "pageIndex": 1,
        "text": "pet। Circuit board, casing আর",
        "startFrame": 3241,
        "endFrame": 3305
      }
    ]
  },
  {
    "id": 22,
    "startFrame": 3305,
    "endFrame": 3488,
    "startSec": 110.18,
    "endSec": 116.26,
    "text": "software—সব Claude-এর design। তিনটাই কোনো electrical মেরামত ছাড়াই কাজ করেছে। তিন,",
    "pages": [
      {
        "pageIndex": 0,
        "text": "software—সব Claude-এর design। তিনটাই কোনো electrical",
        "startFrame": 3305,
        "endFrame": 3421
      },
      {
        "pageIndex": 1,
        "text": "মেরামত ছাড়াই কাজ করেছে। তিন,",
        "startFrame": 3421,
        "endFrame": 3488
      }
    ]
  },
  {
    "id": 23,
    "startFrame": 3488,
    "endFrame": 3671,
    "startSec": 116.26,
    "endSec": 122.38,
    "text": "robot। puzzle cube সমাধান, বোতলের ছিপি খোলা, ছবি আঁকা। Simulated robot arm test-এ",
    "pages": [
      {
        "pageIndex": 0,
        "text": "robot। puzzle cube সমাধান, বোতলের ছিপি খোলা, ছবি",
        "startFrame": 3488,
        "endFrame": 3596
      },
      {
        "pageIndex": 1,
        "text": "আঁকা। Simulated robot arm test-এ",
        "startFrame": 3596,
        "endFrame": 3671
      }
    ]
  },
  {
    "id": 24,
    "startFrame": 3671,
    "endFrame": 3870,
    "startSec": 122.38,
    "endSec": 129.0,
    "text": "score ৬৪.৯ শতাংশ, যা আগের Fable 5.1-এর দ্বিগুণেরও বেশি। চার,",
    "pages": [
      {
        "pageIndex": 0,
        "text": "score ৬৪.৯ শতাংশ, যা আগের Fable 5.1-এর দ্বিগুণেরও",
        "startFrame": 3671,
        "endFrame": 3834
      },
      {
        "pageIndex": 1,
        "text": "বেশি। চার,",
        "startFrame": 3834,
        "endFrame": 3870
      }
    ]
  },
  {
    "id": 25,
    "startFrame": 3870,
    "endFrame": 4031,
    "startSec": 129.0,
    "endSec": 134.38,
    "text": "বিজ্ঞান। black hole নিয়ে পদার্থবিজ্ঞানের দুটো খোলা সমস্যার সমাধান করেছে। আর gene",
    "pages": [
      {
        "pageIndex": 0,
        "text": "বিজ্ঞান। black hole নিয়ে পদার্থবিজ্ঞানের দুটো খোলা",
        "startFrame": 3870,
        "endFrame": 3971
      },
      {
        "pageIndex": 1,
        "text": "সমস্যার সমাধান করেছে। আর gene",
        "startFrame": 3971,
        "endFrame": 4031
      }
    ]
  },
  {
    "id": 26,
    "startFrame": 4031,
    "endFrame": 4178,
    "startSec": 134.38,
    "endSec": 139.28,
    "text": "therapy-তে ব্যবহৃত ভাইরাসের protein খোলসের গঠন অনুমান করার নতুন পদ্ধতি দিয়েছে।",
    "pages": [
      {
        "pageIndex": 0,
        "text": "therapy-তে ব্যবহৃত ভাইরাসের protein খোলসের গঠন",
        "startFrame": 4031,
        "endFrame": 4117
      },
      {
        "pageIndex": 1,
        "text": "অনুমান করার নতুন পদ্ধতি দিয়েছে।",
        "startFrame": 4117,
        "endFrame": 4178
      }
    ]
  },
  {
    "id": 27,
    "startFrame": 4178,
    "endFrame": 4351,
    "startSec": 139.28,
    "endSec": 145.04,
    "text": "৩৪টার মধ্যে ২৮টিতে সফল। আর cyber security-তে Mythos ১,৮২৯টা",
    "pages": [
      {
        "pageIndex": 0,
        "text": "৩৪টার মধ্যে ২৮টিতে সফল। আর cyber security-তে Mythos",
        "startFrame": 4178,
        "endFrame": 4328
      },
      {
        "pageIndex": 1,
        "text": "১,৮২৯টা",
        "startFrame": 4328,
        "endFrame": 4351
      }
    ]
  },
  {
    "id": 28,
    "startFrame": 4351,
    "endFrame": 4466,
    "startSec": 145.04,
    "endSec": 148.88,
    "text": "পরিচিত নিরাপত্তা ত্রুটির প্রায় ৯০ শতাংশ নিজে থেকেই খুঁজে পেয়েছে।",
    "pages": [
      {
        "pageIndex": 0,
        "text": "পরিচিত নিরাপত্তা ত্রুটির প্রায় ৯০ শতাংশ নিজে থেকেই",
        "startFrame": 4351,
        "endFrame": 4440
      },
      {
        "pageIndex": 1,
        "text": "খুঁজে পেয়েছে।",
        "startFrame": 4440,
        "endFrame": 4466
      }
    ]
  },
  {
    "id": 29,
    "startFrame": 4486,
    "endFrame": 4552,
    "startSec": 149.54,
    "endSec": 151.72,
    "text": "এখন প্রশ্ন, আমি কি ব্যবহার করতে পারব?",
    "pages": [
      {
        "pageIndex": 0,
        "text": "এখন প্রশ্ন, আমি কি ব্যবহার করতে পারব?",
        "startFrame": 4486,
        "endFrame": 4552
      }
    ]
  },
  {
    "id": 30,
    "startFrame": 4571,
    "endFrame": 4756,
    "startSec": 152.36,
    "endSec": 158.52,
    "text": "Fable 5.2 আজই সব platform-এ পাওয়া যাচ্ছে, Amazon, Google Cloud আর Microsoft Azure-সহ।",
    "pages": [
      {
        "pageIndex": 0,
        "text": "Fable 5.2 আজই সব platform-এ পাওয়া যাচ্ছে, Amazon,",
        "startFrame": 4571,
        "endFrame": 4679
      },
      {
        "pageIndex": 1,
        "text": "Google Cloud আর Microsoft Azure-সহ।",
        "startFrame": 4679,
        "endFrame": 4756
      }
    ]
  },
  {
    "id": 31,
    "startFrame": 4756,
    "endFrame": 4898,
    "startSec": 158.52,
    "endSec": 163.28,
    "text": "Launch offer-এ Pro plan-এর সাপ্তাহিক limit-এর অর্ধেক পর্যন্ত Fable ব্যবহার করা",
    "pages": [
      {
        "pageIndex": 0,
        "text": "Launch offer-এ Pro plan-এর সাপ্তাহিক limit-এর অর্ধেক",
        "startFrame": 4756,
        "endFrame": 4851
      },
      {
        "pageIndex": 1,
        "text": "পর্যন্ত Fable ব্যবহার করা",
        "startFrame": 4851,
        "endFrame": 4898
      }
    ]
  },
  {
    "id": 32,
    "startFrame": 4898,
    "endFrame": 5084,
    "startSec": 163.28,
    "endSec": 169.46,
    "text": "যাবে। developer-দের জন্য দাম প্রতি ১০ লাখ token-এ input ৮ ডলার, output ৪০ ডলার।",
    "pages": [
      {
        "pageIndex": 0,
        "text": "যাবে। developer-দের জন্য দাম প্রতি ১০ লাখ token-এ",
        "startFrame": 4898,
        "endFrame": 5013
      },
      {
        "pageIndex": 1,
        "text": "input ৮ ডলার, output ৪০ ডলার।",
        "startFrame": 5013,
        "endFrame": 5084
      }
    ]
  },
  {
    "id": 33,
    "startFrame": 5084,
    "endFrame": 5243,
    "startSec": 169.46,
    "endSec": 174.78,
    "text": "চাইলে fast mode-এ আড়াই গুণ পর্যন্ত দ্রুত পাবে, তবে দাম দ্বিগুণ। তবে Anthropic নিজেই",
    "pages": [
      {
        "pageIndex": 0,
        "text": "চাইলে fast mode-এ আড়াই গুণ পর্যন্ত দ্রুত পাবে, তবে",
        "startFrame": 5084,
        "endFrame": 5181
      },
      {
        "pageIndex": 1,
        "text": "দাম দ্বিগুণ। তবে Anthropic নিজেই",
        "startFrame": 5181,
        "endFrame": 5243
      }
    ]
  },
  {
    "id": 34,
    "startFrame": 5243,
    "endFrame": 5449,
    "startSec": 174.78,
    "endSec": 181.64,
    "text": "বলছে, বেশিরভাগ কাজে শুরু করো Opus 5.5 দিয়ে। আরও কঠিন কাজ হলে তখন Fable-এ ওঠো।",
    "pages": [
      {
        "pageIndex": 0,
        "text": "বলছে, বেশিরভাগ কাজে শুরু করো Opus 5.5 দিয়ে। আরও",
        "startFrame": 5243,
        "endFrame": 5370
      },
      {
        "pageIndex": 1,
        "text": "কঠিন কাজ হলে তখন Fable-এ ওঠো।",
        "startFrame": 5370,
        "endFrame": 5449
      }
    ]
  },
  {
    "id": 35,
    "startFrame": 5449,
    "endFrame": 5591,
    "startSec": 181.64,
    "endSec": 186.38,
    "text": "একটা কথা মাথায় রেখো, এই score-গুলো Anthropic নিজেরাই প্রকাশ করেছে। আর Fable",
    "pages": [
      {
        "pageIndex": 0,
        "text": "একটা কথা মাথায় রেখো, এই score-গুলো Anthropic",
        "startFrame": 5449,
        "endFrame": 5533
      },
      {
        "pageIndex": 1,
        "text": "নিজেরাই প্রকাশ করেছে। আর Fable",
        "startFrame": 5533,
        "endFrame": 5591
      }
    ]
  },
  {
    "id": 36,
    "startFrame": 5591,
    "endFrame": 5758,
    "startSec": 186.38,
    "endSec": 191.94,
    "text": "সব ক্ষেত্রেই সেরা নয়। Business workflow test-এ Gemini 4 Carbon সামান্য এগিয়ে: ৫৩.৯,",
    "pages": [
      {
        "pageIndex": 0,
        "text": "সব ক্ষেত্রেই সেরা নয়। Business workflow test-এ",
        "startFrame": 5591,
        "endFrame": 5683
      },
      {
        "pageIndex": 1,
        "text": "Gemini 4 Carbon সামান্য এগিয়ে: ৫৩.৯,",
        "startFrame": 5683,
        "endFrame": 5758
      }
    ]
  },
  {
    "id": 37,
    "startFrame": 5758,
    "endFrame": 5923,
    "startSec": 191.94,
    "endSec": 197.42,
    "text": "বনাম ৫১.৪। আর Fable-কে hacking বা biology-র ঝুঁকিপূর্ণ কিছু জিজ্ঞেস করলে সে উত্তর দেবে না।",
    "pages": [
      {
        "pageIndex": 0,
        "text": "বনাম ৫১.৪। আর Fable-কে hacking বা biology-র",
        "startFrame": 5758,
        "endFrame": 5837
      },
      {
        "pageIndex": 1,
        "text": "ঝুঁকিপূর্ণ কিছু জিজ্ঞেস করলে সে উত্তর দেবে না।",
        "startFrame": 5837,
        "endFrame": 5923
      }
    ]
  },
  {
    "id": 38,
    "startFrame": 5923,
    "endFrame": 6056,
    "startSec": 197.42,
    "endSec": 201.88,
    "text": "কিছু জিজ্ঞেস করলে সে উত্তর দেবে না। প্রশ্নটা চলে যায় পুরোনো একটা Opus model",
    "pages": [
      {
        "pageIndex": 0,
        "text": "কিছু জিজ্ঞেস করলে সে উত্তর দেবে না। প্রশ্নটা চলে",
        "startFrame": 5923,
        "endFrame": 6007
      },
      {
        "pageIndex": 1,
        "text": "যায় পুরোনো একটা Opus model",
        "startFrame": 6007,
        "endFrame": 6056
      }
    ]
  },
  {
    "id": 39,
    "startFrame": 6056,
    "endFrame": 6108,
    "startSec": 201.88,
    "endSec": 203.6,
    "text": "কাছে। তাহলে মূল কথাটা কী?",
    "pages": [
      {
        "pageIndex": 0,
        "text": "কাছে। তাহলে মূল কথাটা কী?",
        "startFrame": 6056,
        "endFrame": 6108
      }
    ]
  },
  {
    "id": 40,
    "startFrame": 6128,
    "endFrame": 6289,
    "startSec": 204.28,
    "endSec": 209.64,
    "text": "AI এখন আর শুধু প্রশ্নের উত্তর দেয় না। একটা পুরো team-এর মতো দিনের পর দিন কাজ করে",
    "pages": [
      {
        "pageIndex": 0,
        "text": "AI এখন আর শুধু প্রশ্নের উত্তর দেয় না। একটা পুরো",
        "startFrame": 6128,
        "endFrame": 6223
      },
      {
        "pageIndex": 1,
        "text": "team-এর মতো দিনের পর দিন কাজ করে",
        "startFrame": 6223,
        "endFrame": 6289
      }
    ]
  },
  {
    "id": 41,
    "startFrame": 6289,
    "endFrame": 6472,
    "startSec": 209.64,
    "endSec": 215.74,
    "text": "বড় project শেষ করতে পারছে। Fable 5.2 সেই বদলের নতুন ধাপ। তুমি কোন কাজে এটা পরীক্ষা",
    "pages": [
      {
        "pageIndex": 0,
        "text": "বড় project শেষ করতে পারছে। Fable 5.2 সেই বদলের নতুন",
        "startFrame": 6289,
        "endFrame": 6404
      },
      {
        "pageIndex": 1,
        "text": "ধাপ। তুমি কোন কাজে এটা পরীক্ষা",
        "startFrame": 6404,
        "endFrame": 6472
      }
    ]
  },
  {
    "id": 42,
    "startFrame": 6472,
    "endFrame": 6606,
    "startSec": 215.74,
    "endSec": 220.2,
    "text": "করতে চাও? কমেন্টে জানাও। আর এমন সহজ ভাষায় tech update পেতে চ্যানেলটা subscribe",
    "pages": [
      {
        "pageIndex": 0,
        "text": "করতে চাও? কমেন্টে জানাও। আর এমন সহজ ভাষায় tech",
        "startFrame": 6472,
        "endFrame": 6552
      },
      {
        "pageIndex": 1,
        "text": "update পেতে চ্যানেলটা subscribe",
        "startFrame": 6552,
        "endFrame": 6606
      }
    ]
  },
  {
    "id": 43,
    "startFrame": 6606,
    "endFrame": 6626,
    "startSec": 220.2,
    "endSec": 220.88,
    "text": "করে রাখো।",
    "pages": [
      {
        "pageIndex": 0,
        "text": "করে রাখো।",
        "startFrame": 6606,
        "endFrame": 6626
      }
    ]
  }
];
