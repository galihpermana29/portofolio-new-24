import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Galih Permana',
	description:
		'Hello my name is Galih Permana and this is my personal portofolio as frontend engineer',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
