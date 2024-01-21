import {
	// fetchDocumentsWithPagination,
	fetchDocumentById,
	fetchAllDocuments,
} from './common';
import COLLECTION_NAMES from './collectionNames';

export const fetchConsultantById = async (consultantId) => {
	const res = await fetchDocumentById(
		COLLECTION_NAMES.CONSULTANTS,
		consultantId,
	);

	return res;
};

export const fetchConsultants = async () => {
	const res = await fetchAllDocuments(COLLECTION_NAMES.CONSULTANTS);
	return res;
};
