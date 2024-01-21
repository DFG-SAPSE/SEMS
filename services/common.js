import { firestore } from './config.js';
import { doc as createDocRef, setDoc } from 'firebase/firestore';

export const fetchAllDocuments = async (collectionName) => {
	try {
		const snapshot = await firestore.collection(collectionName).get();
		const documents = snapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data(),
		}));
		return { data: documents, error: null, ok: true };
	} catch (error) {
		return {
			data: null,
			error: Error(('Error fetching documents: ', error)),
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
			error: Error('Error fetching documents with pagination: ', error),
			ok: false,
		};
	}
};

export const fetchDocumentById = async (collectionName, documentId) => {
	try {
		const docRef = firestore.collection(collectionName).doc(documentId);
		const docSnapshot = await docRef.get();

		if (docSnapshot.exists)
			return {
				data: { id: docSnapshot.id, ...docSnapshot.data() },
				error: null,
			};

		return { data: 'Document does not exists', error: null };
	} catch (error) {
		return { data: null, error: Error('Error fetching document: ', error) };
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
		return { ok: false, error: Error('Error updating document: ', error) };
	}
};
