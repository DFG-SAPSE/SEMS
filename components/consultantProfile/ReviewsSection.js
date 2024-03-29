import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const comments = [
	{
		name: 'Paul M.',
		text: 'Andrea was really helpful and insightful with the concerns I brought up with her about community organizing. I recommend making a consultation with him if you are facing challenges in your community projects. She provided practical solutions and guidance that made a significant impact on our initiatives.',
	},
	{
		name: 'Erica B.',
		text: 'Andrea not only gave me advice on planning, but she also provided valuable insights into various aspects of my project. Her expertise extends beyond what I initially expected, and I appreciate the comprehensive support she offered during our consultation. I highly recommend her for any business planning needs.',
	},
	{
		name: 'Drew T.',
		text: 'I came into a consultation with Andrea without expecting anything, but I was so surprised that she actually provided me with a lot of information that was helpful in my enterprise. Her deep knowledge and experience in community development were evident, and I left the session with a clearer understanding of how to navigate challenges and drive success in my projects.',
	},
	// Add more comments as needed
];

const ReviewSection = () => {
	return (
		<>
			<View style={styles.commentSection}>
				<Text style={styles.highlightedReviewsTitle}>
					Highlighted reviews
				</Text>
				{comments.map((comment, index) => (
					<View key={index}>
						<View style={styles.commenterNameContainer}>
							<Text style={styles.commenterName}>
								{comment.name}
							</Text>
							<Text style={styles.commentText}>
								{comment.text}
							</Text>
						</View>
					</View>
				))}
				<View style={styles.viewAllReviewsContainer}>
					<Text style={styles.viewAllReviewsText}>
						View all reviews (28)
					</Text>
				</View>
			</View>
		</>
	);
};

import { theme } from '../../styles/theme';

const styles = StyleSheet.create({
	commentSection: {
		border: '0.25px solid rgba(204, 204, 204, 0.50)',
		boxShadow: '0px 0px 15px 0px rgba(0, 0, 0, 0.05)',
		backgroundColor: theme.colors.white,
		marginTop: theme.spacing.large,
		padding: theme.spacing.large,
	},
	highlightedReviewsTitle: {
		color: theme.colors.text.gray,
		fontFamily: 'Roboto-Medium',
		fontSize: theme.typography.tinyBody.fontSize,
		marginVertical: theme.spacing.tiny,
	},
	commenterNameContainer: {
		marginTop: theme.spacing.medium,
	},
	commenterName: {
		color: theme.colors.primary.dark,
		fontFamily: 'Roboto-Bold',
		fontSize: theme.typography.tinyBody.fontSize,
		marginVertical: theme.spacing.tiny,
	},
	commentText: {
		fontFamily: 'Roboto-Regular',
		fontSize: theme.typography.tinyBody.fontSize,
		letterSpacing: 0.1,
	},
	viewAllReviewsContainer: {
		marginVertical: theme.spacing.medium,
	},
	viewAllReviewsText: {
		fontFamily: 'Roboto-Bold',
		fontSize: theme.typography.tinyBody.fontSize,
		color: theme.colors.primary.dark,
	},
});

export default ReviewSection;
