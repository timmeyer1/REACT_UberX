// src/pages/TermsOfUse.js
import React from 'react';
import StarField from '../../components/StarField';

const TermsOfUse = () => {
    return (
        <div className="bg-black text-white min-h-screen flex flex-col items-center p-8 pt-24">
            <title>Uber X - Conditions d'Utilisation</title>
            <StarField />
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center titre">Conditions d'Utilisation</h1>
            
            {/* Introduction */}
            <section className="mb-12 max-w-3xl mx-auto text-lg">
                <p>
                    Bienvenue sur le site d'<strong>Uber X</strong>. En accédant à nos services, vous acceptez de vous conformer aux présentes conditions d’utilisation. Cette page détaille les règles et réglementations relatives à l’utilisation de notre site web et de nos services. Il est essentiel de lire et de comprendre ces conditions avant d'utiliser nos services.
                </p>
                <p>
                    Si vous n’acceptez pas les termes de cette politique, nous vous prions de ne pas utiliser notre site ou nos services. Vos données personnelles sont protégées par notre politique de confidentialité, mais il est également important de respecter ces conditions lors de l’utilisation de notre plateforme.
                </p>
            </section>

            {/* Utilisation des Services */}
            <section className="mb-12 max-w-3xl mx-auto text-lg">
                <h2 className="text-3xl font-semibold mb-4 text-purple-500">1. Utilisation des Services</h2>
                <p>
                    En accédant à nos services, vous vous engagez à les utiliser uniquement dans le respect des lois et règlements applicables. Vous devez vous assurer que votre utilisation de notre plateforme ne viole aucune loi, règle ou droit d’un tiers.
                </p>
                <p>
                    Vous acceptez également de ne pas utiliser nos services pour :
                </p>
                <ul className="list-disc pl-8 mt-4">
                    <li>Commettre des actes illégaux ou frauduleux.</li>
                    <li>Accéder ou tenter d’accéder à des informations ou données non autorisées.</li>
                    <li>Interférer ou perturber le fonctionnement normal de nos services.</li>
                    <li>Utiliser des moyens automatisés pour accéder à notre plateforme (par exemple, des robots ou des scripts).</li>
                </ul>
            </section>

            {/* Comptes Utilisateurs */}
            <section className="mb-12 max-w-3xl mx-auto text-lg">
                <h2 className="text-3xl font-semibold mb-4 text-purple-500">2. Comptes Utilisateurs</h2>
                <p>
                    Pour accéder à certaines fonctionnalités de nos services, vous devez créer un compte utilisateur. Vous acceptez de fournir des informations exactes et complètes lors de l’inscription et de maintenir la confidentialité de vos informations d’identification.
                </p>
                <p>
                    Vous êtes responsable de toutes les activités réalisées sous votre compte, et vous devez immédiatement nous informer de toute utilisation non autorisée de votre compte.
                </p>
                <p>
                    Nous nous réservons le droit de suspendre ou de résilier votre compte en cas de violation des présentes conditions d’utilisation.
                </p>
            </section>

            {/* Propriété Intellectuelle */}
            <section className="mb-12 max-w-3xl mx-auto text-lg">
                <h2 className="text-3xl font-semibold mb-4 text-purple-500">3. Propriété Intellectuelle</h2>
                <p>
                    Tous les contenus présents sur notre site, y compris mais sans s’y limiter, les textes, graphiques, logos, images, vidéos et logiciels, sont la propriété exclusive d'<strong>Uber X</strong> ou de ses partenaires et sont protégés par les lois sur le droit d’auteur et la propriété intellectuelle.
                </p>
                <p>
                    Vous ne pouvez pas copier, reproduire, distribuer, transmettre, afficher, publier ou modifier tout contenu sans notre autorisation préalable expresse. Tout usage non autorisé des éléments de notre site pourrait entraîner des actions légales à votre encontre.
                </p>
            </section>

            {/* Restrictions */}
            <section className="mb-12 max-w-3xl mx-auto text-lg">
                <h2 className="text-3xl font-semibold mb-4 text-purple-500">4. Restrictions</h2>
                <p>
                    Vous vous engagez à ne pas utiliser nos services pour :
                </p>
                <ul className="list-disc pl-8 mt-4">
                    <li>Diffuser des virus ou des logiciels malveillants qui pourraient affecter notre plateforme ou les utilisateurs.</li>
                    <li>Accéder à des données sensibles ou à des informations privées sans consentement.</li>
                    <li>Publier du contenu offensant, diffamatoire ou haineux.</li>
                    <li>Collecter, stocker ou partager des informations personnelles d'autres utilisateurs sans leur consentement explicite.</li>
                </ul>
                <p>
                    Toute violation de ces restrictions peut entraîner une suspension immédiate de votre accès à nos services, sans préjudice de nos droits légaux.
                </p>
            </section>

            {/* Modifications des Conditions */}
            <section className="mb-12 max-w-3xl mx-auto text-lg">
                <h2 className="text-3xl font-semibold mb-4 text-purple-500">5. Modifications des Conditions d'Utilisation</h2>
                <p>
                    Nous nous réservons le droit de modifier ces conditions d'utilisation à tout moment. Toutes les modifications seront publiées sur cette page, et la date de révision sera mise à jour en conséquence.
                </p>
                <p>
                    Nous vous encourageons à consulter régulièrement cette page pour vous tenir informé de tout changement. L’utilisation continue de nos services après la publication des modifications constitue votre acceptation des nouvelles conditions.
                </p>
            </section>

            {/* Responsabilité */}
            <section className="mb-12 max-w-3xl mx-auto text-lg">
                <h2 className="text-3xl font-semibold mb-4 text-purple-500">6. Responsabilité</h2>
                <p>
                    <strong>Uber X</strong> met tout en œuvre pour garantir la qualité et la sécurité de ses services, mais nous ne pouvons être tenus responsables des pertes ou des dommages découlant de l'utilisation de notre plateforme, y compris en cas d’interruption, d’erreurs ou d’accès non autorisé.
                </p>
                <p>
                    Nous ne serons pas responsables des actions d'un tiers ou d'un utilisateur de notre plateforme. Vous utilisez nos services à vos propres risques.
                </p>
            </section>

            {/* Limitations de Responsabilité */}
            <section className="mb-12 max-w-3xl mx-auto text-lg">
                <h2 className="text-3xl font-semibold mb-4 text-purple-500">7. Limitations de Responsabilité</h2>
                <p>
                    <strong>Uber X</strong> ne pourra en aucun cas être tenu responsable de tout dommage indirect, accidentel, particulier ou consécutif, y compris la perte de données, la perte de profits ou l'interruption des services. 
                </p>
                <p>
                    La responsabilité totale d'<strong>Uber X</strong> en vertu des présentes conditions d'utilisation, que ce soit en vertu d’un contrat, d’un délit ou autre, ne pourra excéder le montant que vous avez payé pour utiliser nos services dans les 12 derniers mois.
                </p>
            </section>

            {/* Résiliation */}
            <section className="mb-12 max-w-3xl mx-auto text-lg">
                <h2 className="text-3xl font-semibold mb-4 text-purple-500">8. Résiliation</h2>
                <p>
                    Nous nous réservons le droit de résilier ou de suspendre votre compte et votre accès à nos services à tout moment, sans préavis et sans responsabilité, si vous violez les présentes conditions d'utilisation.
                </p>
                <p>
                    Vous pouvez également résilier votre compte à tout moment en nous contactant ou en fermant votre compte à partir de notre interface utilisateur. La résiliation n’affecte pas les obligations ou responsabilités qui ont été engagées avant la résiliation.
                </p>
            </section>

            {/* Contact */}
            <section className="mb-12 max-w-3xl mx-auto text-lg">
                <h2 className="text-3xl font-semibold mb-4 text-purple-500">9. Contact</h2>
                <p>
                    Si vous avez des questions concernant ces conditions d'utilisation ou si vous souhaitez nous contacter à propos de quelque aspect que ce soit de nos services, vous pouvez nous écrire à l'adresse e-mail suivante : <a href="mailto:contact@uberx.com" className="text-purple-500">contact@uberx.com</a>.
                </p>
            </section>
        </div>
    );
};

export default TermsOfUse;
