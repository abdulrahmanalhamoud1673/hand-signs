// ===== بيانات مشروع Firebase =====
// انسخها من: console.firebase.google.com ← مشروعك ← ⚙️ Project settings ← Your apps ← Web app
// بدّل كل قيمة فيها PUT_ بالقيمة الحقيقية.

export const firebaseConfig = {
  apiKey:      "PUT_API_KEY",
  authDomain:  "PUT_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://PUT_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId:   "PUT_PROJECT_ID",
  appId:       "PUT_APP_ID"
};

// إيميلك أنت — هاد الوحيد اللي بيقدر يفتح لوحة الأدمن ويحظر.
// لازم يكون نفس الإيميل الموجود بملف database.rules.json
export const OWNER_EMAIL = "abdulrahmanalhamoud1673@gmail.com";

// إذا لسه ما ملّيت البيانات، الموقع بيشتغل عادي بس بدون تسجيل ولا حظر.
export const isConfigured = !firebaseConfig.apiKey.includes("PUT_");
