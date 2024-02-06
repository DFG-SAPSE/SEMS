import { firestore } from './config.js';
import {
	doc as createDocRef,
	setDoc,
	getDocs,
	collection,
	getDoc,
} from 'firebase/firestore';

export const fetchAllDocuments = async (collectionName) => {
	try {
		const snapshot = await getDocs(collection(firestore, collectionName));
		const documents = snapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data(),
		}));
		return { data: documents, error: null, ok: true };
	} catch (error) {
		return {
			data: null,
			error: 'Error fetching documents: ' + error.message,
			ok: false,
		};
	}
};

export const fetchDocumentsWithPagination = async (
	collectionName,
	lastVisible,
	limit = 10,
) => {
	try {
		let query = firestore
			.collection(collectionName)
			.orderBy('someField')
			.limit(limit);

		if (lastVisible) {
			query = query.startAfter(lastVisible);
		}

		const snapshot = await query.get();
		const documents = snapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data(),
		}));

		const lastVisibleDocument = snapshot.docs[snapshot.docs.length - 1];

		return {
			data: { documents, lastVisible: lastVisibleDocument },
			error: null,
			ok: true,
		};
	} catch (error) {
		return {
			data: null,
			error: 'Error fetching documents with pagination: ' + error.message,
			ok: false,
		};
	}
};

export const fetchDocumentById = async (collectionName, documentId) => {
	try {
		const docRef = createDocRef(firestore, collectionName, documentId);
		const docSnapshot = await getDoc(docRef);

		if (docSnapshot.exists)
			return {
				data: { id: docSnapshot.id, ...docSnapshot.data() },
				error: null,
				ok: true,
			};

		return { data: null, error: 'Document does not exists', ok: false };
	} catch (error) {
		return {
			data: null,
			error: 'Error fetching document: ' + error.message,
			ok: false,
		};
	}
};

export const updateEntireDocument = async (
	collectionName,
	documentId,
	newData,
) => {
	try {
		const docRef = createDocRef(firestore, collectionName, documentId);
		await setDoc(docRef, newData);
		return { ok: true, error: null };
	} catch (error) {
		return {
			ok: false,
			error: 'Error updating document: ' + error.message,
		};
	}
};
