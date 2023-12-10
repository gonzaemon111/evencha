import admin from 'firebase-admin';
import { cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { getServerConfig } from '@/shared/config';

if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: cert({
      projectId: getServerConfig().FIREBASE_PROJECT_ID,
      clientEmail: getServerConfig().FIREBASE_CLIENT_EMAIL,
      privateKey: getServerConfig().FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    }),
  });
}

export const auth = getAuth();
export const db = getFirestore();
