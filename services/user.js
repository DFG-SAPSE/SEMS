import {
	// fetchDocumentsWithPagination,
	fetchDocumentById,
	fetchAllDocuments,
	updateEntireDocument,
} from './common';
import COLLECTION_NAMES from './collectionNames';
import { auth } from './config';

export const fetchConsultantById = async (consultantId) => {
	const res = await fetchDocumentById(
		COLLECTION_NAMES.CONSULTANTS,
		consultantId,
	);

	return res;
};

export const fetchEntrepreneurById = async (consultantId) => {
	const res = await fetchDocumentById(
		COLLECTION_NAMES.ENTREPRENEURS,
		consultantId,
	);

	return res;
};

export const fetchOtherInMeeting = async (isConsultant, id) => {
	// if current person is consultant, the other person in the meeting
	// must be an entrepreneur, and vice versa
	if (isConsultant) {
		return await fetchEntrepreneurById(id);
	} else {
		return await fetchConsultantById(id);
	}
};

export const fetchConsultants = async () => {
	const res = await fetchAllDocuments(COLLECTION_NAMES.CONSULTANTS);
	return res;
};

export const updateUserData = async (userData) => {
	const user = auth.currentUser;
	if (!user) return { ok: false, error: 'No user logged in!' };

	const uid = user.uid;
	const res = await updateEntireDocument(
		COLLECTION_NAMES.CONSULTANTS,
		uid,
		userData,
	);

	return res;
};
