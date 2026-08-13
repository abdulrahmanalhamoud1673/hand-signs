// ===== بيانات مشروع Firebase =====
// انسخها من: console.firebase.google.com ← مشروعك ← ⚙️ Project settings ← Your apps ← Web app
// بدّل كل قيمة فيها PUT_ بالقيمة الحقيقية.

export const firebaseConfig = {
  apiKey:      "AIzaSyBmMnfkimpYTn_vRECleH7PZg7Vs0TLonA",
  authDomain:  "hand-signs-5cad1.firebaseapp.com",
  databaseURL: "https://hand-signs-5cad1-default-rtdb.firebaseio.com",
  projectId:   "hand-signs-5cad1",
  appId:       "1:380188687647:web:856ab6cc1b76ef2b37442a"
};

// إيميلك أنت — هاد الوحيد اللي بيقدر يفتح لوحة الأدمن ويحظر.
// لازم يكون نفس الإيميل الموجود بملف database.rules.json
export const OWNER_EMAIL = "abdulrahmanalhamoud1673@gmail.com";

// إذا لسه ما ملّيت البيانات، الموقع بيشتغل عادي بس بدون تسجيل ولا حظر.
export const isConfigured = !firebaseConfig.apiKey.includes("PUT_");
