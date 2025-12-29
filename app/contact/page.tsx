export default function Contact() {
    return (
        <div className="min-h-screen pt-24 px-4 bg-neutral-950 text-center">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-8">Contactez-moi</h2>
                <p className="text-neutral-400 mb-8">
                    Vous avez un projet en tête ou simplement envie de discuter ? N'hésitez pas à m'envoyer un message.
                </p>
                <a
                    href="mailto:contact@example.com"
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black bg-cyan-400 rounded-full hover:bg-cyan-300 transition-colors"
                >
                    Envoyer un email
                </a>
            </div>
        </div>
    );
}
