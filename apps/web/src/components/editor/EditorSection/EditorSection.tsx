"use client";


import type { ReactNode } from "react";
import { useState } from "react";

import styles from "./EditorSection.module.css";
import { FaAngleDown } from "react-icons/fa";

type EditorSectionProps = {
	title: string;
	action?: ReactNode;
	children: ReactNode;
	collapsible?: boolean;
	defaultCollapsed?: boolean;
};

/**
 * EditorSection
 * Bloc de section standard de l'éditeur (titre + action optionnelle + contenu).
 *
 * États visuels :
 * - `collapsed` : le contenu est masqué et le chevron pivote de 180° (uniquement si `collapsible`)
 *
 * Comportement :
 * - `collapsible` active le header cliquable et le chevron ; sans cette prop, le
 *   composant se comporte exactement comme avant (section statique, toujours ouverte)
 * - `defaultCollapsed` permet de démarrer la section repliée
 */
export function EditorSection({
	title,
	action,
	children,
	collapsible = false,
	defaultCollapsed = false,
}: EditorSectionProps) {
	const [collapsed, setCollapsed] = useState(defaultCollapsed);

	// Le contenu n'est masqué que si la section est à la fois collapsible et repliée
	const isCollapsed = collapsible && collapsed;

	// Classes conditionnelles du chevron (rotation selon l'état replié)
	const chevronClasses = [styles.chevron, collapsed ? styles.chevronCollapsed : ""].join(" ");

	return (
		<section className={styles.root}>
			{/* ── Header : titre + action + toggle si collapsible ── */}
			<div
				aria-expanded={collapsible ? !collapsed : undefined}
				className={styles.header}
				onClick={collapsible ? () => setCollapsed((value) => !value) : undefined}
				role={collapsible ? "button" : undefined}
				tabIndex={collapsible ? 0 : undefined}
			>
				<h3>{title}</h3>

				<div className={styles.headerRight}>
					{action}
					{collapsible && <FaAngleDown className={chevronClasses} size={16} />}
				</div>
			</div>

			{/* ── Contenu : masqué si repliée ── */}
			{!isCollapsed && <div className={styles.content}>{children}</div>}
		</section>
	);
}