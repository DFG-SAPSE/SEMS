import { firestore } from './config.js';

export const fetchAllDocuments = async (collectionName) => {
	try {
		const snapshot = await firestore.collection(collectionName).get();
		const documents = snapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data(),
		}));
		return { data: documents, error: null };
	} catch (error) {
		return {
			data: null,
			error: Error(('Error fetching documents: ', error)),
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
		};
	} catch (error) {
		return {
			data: null,
			error: Error('Error fetching documents with pagination: ', error),
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
