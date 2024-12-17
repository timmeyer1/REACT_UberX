// src/pages/PrivacyPolicy.js
import React from 'react';
import StarField from '../../components/StarField';

const PrivacyPolicy = () => {
    return (
        <div className="bg-black text-white min-h-screen flex flex-col items-center p-8 pt-24">
            <title>Uber X - Politique de Confidentialité</title>
            <StarField />
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center titre">Politique de Confidentialité</h1>
            
            {/* Introduction */}
            <section className="mb-12 max-w-3xl mx-auto text-lg">
                <p>
                    Chez <strong>Uber X</strong>, nous considérons vos données personnelles comme des biens précieux. Nous nous engageons à les protéger et à respecter vos droits en tant que propriétaire de ces informations. Cette politique de confidentialité a pour but de vous informer de manière transparente sur la façon dont nous collectons, utilisons et protégeons vos données personnelles.
                </p>
                <p>
                    Nous croyons fermement que vos données vous appartiennent, et vous seul. Lorsque vous utilisez nos services, vous avez le contrôle total sur vos informations. Lisez cette politique pour comprendre comment nous agissons pour garantir la sécurité et la confidentialité de vos données.
                </p>
            </section>

            {/* Informations Collectées */}
            <section className="mb-12 max-w-3xl mx-auto text-lg">
                <h2 className="text-3xl font-semibold mb-4 text-purple-500">1. Informations Collectées</h2>
                <p>
                    Nous collectons des informations pour améliorer nos services et vous offrir une expérience optimale. Cependant, sachez que nous ne collectons que les informations strictement nécessaires à l'exécution de nos services. Voici les types de données que nous recueillons :
                </p>
                <ul className="list-disc pl-8 mt-4">
                    <li><strong>Informations personnelles</strong> : Ces informations incluent des données que vous nous fournissez directement, telles que votre nom, votre adresse e-mail, vos informations de paiement, etc. Ces données vous appartiennent et nous les utilisons uniquement avec votre consentement explicite.</li>
                    <li><strong>Informations techniques</strong> : Nous recueillons des informations techniques comme votre adresse IP, le type d’appareil que vous utilisez, et d’autres données de navigation pour améliorer l’expérience utilisateur. Ces données sont anonymisées et utilisées exclusivement pour améliorer nos services.</li>
                    <li><strong>Informations sur les transactions</strong> : Nous recueillons des informations liées à vos achats et à vos interactions avec nos produits, mais ces informations ne sont utilisées que dans le cadre de la fourniture de nos services. Nous ne partageons jamais ces informations avec des tiers à des fins commerciales.</li>
                </ul>
            </section>

            {/* Utilisation des Informations */}
            <section className="mb-12 max-w-3xl mx-auto text-lg">
                <h2 className="text-3xl font-semibold mb-4 text-purple-500">2. Utilisation des Informations</h2>
                <p>
                    Nous utilisons vos données personnelles uniquement dans le but de vous offrir un service de qualité et sécurisé. Vos informations ne sont jamais utilisées à des fins commerciales non sollicitées.
                </p>
                <ul className="list-disc pl-8 mt-4">
                    <li><strong>Amélioration de nos services</strong> : Nous analysons vos données pour optimiser nos services, mais toujours dans le respect de votre vie privée. Toutes les informations collectées sont anonymisées ou pseudonymisées dans la mesure du possible.</li>
                    <li><strong>Support client</strong> : Lorsque vous nous contactez pour des questions ou des demandes d'assistance, nous utilisons vos données pour vous offrir un support personnalisé et efficace. Vos échanges avec notre équipe sont protégés et jamais partagés avec des tiers.</li>
                    <li><strong>Communication</strong> : Nous vous enverrons des notifications importantes et des informations relatives à votre compte ou à nos services. Cependant, vous pouvez choisir de vous désinscrire de toute communication marketing, si vous le souhaitez.</li>
                    <li><strong>Sécurité et conformité</strong> : Nous utilisons vos données pour garantir la sécurité de notre plateforme et nous conformer à la législation en vigueur. Votre sécurité est notre priorité absolue.</li>
                </ul>
            </section>

            {/* Protection des Informations */}
            <section className="mb-12 max-w-3xl mx-auto text-lg">
                <h2 className="text-3xl font-semibold mb-4 text-purple-500">3. Protection des Informations</h2>
                <p>
                    Chez <strong>Uber X</strong>, nous mettons en œuvre des mesures de sécurité de pointe pour protéger vos données personnelles. Vos informations sont stockées en toute sécurité et cryptées dans nos systèmes. Vous avez la certitude que nous respectons la confidentialité de vos données.
                </p>
                <p><strong>Votre sécurité, c'est notre priorité</strong>. Nous nous engageons à tout mettre en œuvre pour protéger vos informations contre toute forme de perte, vol ou accès non autorisé.</p>
                <ul className="list-disc pl-8 mt-4">
                    <li><strong>Chiffrement avancé</strong> : Vos données sont cryptées lors de leur transmission et de leur stockage. Même nos employés ne peuvent y accéder sans autorisation explicite de votre part.</li>
                    <li><strong>Contrôles d'accès stricts</strong> : Seules les personnes autorisées peuvent accéder à vos données, et seulement dans le cadre de la prestation de nos services. Vous avez le contrôle total sur l'accès à vos informations.</li>
                    <li><strong>Audits réguliers</strong> : Nous effectuons des audits de sécurité réguliers pour assurer que toutes vos données sont protégées et sécurisées selon les normes les plus strictes.</li>
                </ul>
            </section>

            {/* Partage des Informations */}
            <section className="mb-12 max-w-3xl mx-auto text-lg">
                <h2 className="text-3xl font-semibold mb-4 text-purple-500">4. Partage des Informations</h2>
                <p>
                    Nous ne vendons ni ne louons jamais vos données personnelles à des tiers. <strong>Vos informations vous appartiennent</strong>, et nous les respectons comme telles. Nous ne partageons vos données qu'avec des prestataires de confiance qui nous aident à fournir nos services, mais toujours sous des conditions strictes pour garantir leur confidentialité.
                </p>
                <ul className="list-disc pl-8 mt-4">
                    <li><strong>Fournisseurs de services tiers</strong> : Nous partageons certaines informations avec nos prestataires de services uniquement pour vous fournir nos produits (hébergement, support, paiement). Ces prestataires sont soumis à des accords stricts de confidentialité.</li>
                    <li><strong>Obligations légales</strong> : Si la loi l'exige, nous pouvons être amenés à partager vos informations, mais seulement dans le cadre de la loi et pour protéger nos droits légaux. Nous ne divulguerons jamais vos informations sans raison légale valable.</li>
                    <li><strong>Transactions commerciales</strong> : En cas de fusion, acquisition ou vente de l'entreprise, vos informations pourront être transférées à un tiers, mais nous vous en informerons toujours au préalable.</li>
                </ul>
            </section>

            {/* Vos Droits */}
            <section className="mb-12 max-w-3xl mx-auto text-lg">
                <h2 className="text-3xl font-semibold mb-4 text-purple-500">5. Vos Droits</h2>
                <p>
                    Vous avez un contrôle total sur vos données. Vos informations vous appartiennent, et vous pouvez exercer vos droits à tout moment, dans les limites de la loi.
                </p>
                <ul className="list-disc pl-8 mt-4">
                    <li><strong>Accès à vos données</strong> : Vous avez le droit d'accéder à vos informations à tout moment. Si vous souhaitez savoir quelles données nous détenons à votre sujet, contactez-nous.</li>
                    <li><strong>Correction et suppression</strong> : Vous avez le droit de demander la correction de vos données si elles sont incorrectes, ou leur suppression si vous ne souhaitez plus que nous les conservions.</li>
                    <li><strong>Retrait du consentement</strong> : Vous pouvez retirer votre consentement à tout moment, ce qui mettra fin à notre utilisation de vos informations personnelles.</li>
                    <li><strong>Portabilité des données</strong> : Si vous le souhaitez, vous pouvez demander à recevoir vos données personnelles dans un format structuré et couramment utilisé, pour les transférer à un autre service.</li>
                </ul>
            </section>

            {/* Modifications de cette Politique */}
            <section className="mb-12 max-w-3xl mx-auto text-lg">
                <h2 className="text-3xl font-semibold mb-4 text-purple-500">6. Modifications de cette Politique</h2>
                <p>
                    Nous nous engageons à vous tenir informé de toute mise à jour de notre politique de confidentialité. Si nous apportons des changements importants, nous vous en informerons directement.
                </p>
                <p>
                    La version la plus récente de cette politique est toujours disponible sur notre site web.
                </p>
            </section>

            {/* Contact */}
            <section className="mb-12 max-w-3xl mx-auto text-lg">
                <h2 className="text-3xl font-semibold mb-4 text-purple-500">7. Contactez-Nous</h2>
                <p>
                    Si vous avez des questions, des préoccupations ou des demandes concernant cette politique ou vos données personnelles, contactez-nous :
                </p>
                <p><strong>Email :</strong> <a href="mailto:contact@uberx.com" className="text-purple-500">contact@uberx.com</a></p>
                <p><strong>Adresse :</strong> Uber X, 123 Rue de l'Innovation, 75001 Paris, France</p>
            </section>

            {/* Dernière mise à jour */}
            <section className="text-center text-lg">
                <p><strong>Dernière mise à jour :</strong> Décembre 2024</p>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
