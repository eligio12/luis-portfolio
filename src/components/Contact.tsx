"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MapPin, Phone, Loader2, CheckCircle2, XCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const GithubIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
);

const LinkedinIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
);

export default function Contact() {
    const { register, handleSubmit, reset } = useForm();
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    // Recibe los datos y el evento original
    const onSubmit = (data: any, e: any) => {
        e.preventDefault();
        setStatus("loading");

        emailjs.sendForm('service_rn126sg', 'template_7aoc5pu', e.target, 'tiSwRXh6hK5Dbwq-g')
            .then((res) => {
                console.log("Email enviado:", res);
                setStatus("success");
                reset();
                // Ocultar el mensaje de éxito después de 5 segundos
                setTimeout(() => setStatus("idle"), 5000);
            })
            .catch((err) => {
                console.error("Error al enviar email:", err);
                setStatus("error");
            });
    };

    return (
        <section id="contact" className="min-h-screen flex flex-col py-24 bg-background relative scroll-mt-20">
            <div className="container mx-auto px-6 flex-grow">

                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                        Hablemos de tu <span className="text-primary">Proyecto</span>
                    </h2>
                    <p className="text-slate-400 max-w-lg mx-auto">
                        ¿Tienes una idea en mente o buscas fortalecer tu equipo de ingeniería? Estoy listo para aportar soluciones técnicas escalables.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">

                    {/* Información de Contacto */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="flex items-start gap-6 group">
                            <div className="p-4 bg-primary/10 border border-primary/20 rounded-2xl group-hover:bg-primary/20 transition-colors">
                                <Mail className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-1">Email</h4>
                                <a href="mailto:luis.cortes7593@alumnos.udg.mx" className="text-slate-400 text-sm hover:text-primary transition-colors">
                                    luis.cr9800@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl group-hover:bg-indigo-500/20 transition-colors">
                                <Phone className="w-6 h-6 text-indigo-400" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-1">Teléfono</h4>
                                <p className="text-slate-400 text-sm">+52 467-102-8465</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl group-hover:bg-cyan-500/20 transition-colors">
                                <MapPin className="w-6 h-6 text-cyan-400" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-1">Ubicación</h4>
                                <p className="text-slate-400 text-sm">Guadalajara, Jalisco, México</p>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-slate-800">
                            <p className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Redes Profesionales</p>
                            <div className="flex gap-4">
                                <a href="https://linkedin.com/in/luis-eligio-cortes-rodarte-713900295/" target="_blank" className="p-4 bg-secondary border border-slate-800 rounded-2xl hover:border-primary transition-colors text-slate-400 hover:text-white shadow-xl">
                                    <LinkedinIcon />
                                </a>
                                <a href="https://github.com/eligio12" target="_blank" className="p-4 bg-secondary border border-slate-800 rounded-2xl hover:border-primary transition-colors text-slate-400 hover:text-white shadow-xl">
                                    <GithubIcon />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Formulario */}
                    <motion.form
                        onSubmit={handleSubmit(onSubmit)}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 lg:p-10 rounded-3xl bg-secondary/50 border border-slate-800 space-y-6 shadow-2xl backdrop-blur-sm"
                    >
                        <div>
                            <label htmlFor="name" className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">Nombre completo</label>
                            <input
                                {...register("name", { required: true })}
                                id="name"
                                type="text"
                                className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-4 text-white focus:border-primary outline-none transition-colors"
                                placeholder="Ej: Juan Pérez"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">Email profesional</label>
                            <input
                                {...register("email", { required: true })}
                                id="email"
                                type="email"
                                className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-4 text-white focus:border-primary outline-none transition-colors"
                                placeholder="juan@empresa.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">Mensaje</label>
                            <textarea
                                {...register("message", { required: true })}
                                id="message"
                                rows={5}
                                className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-4 text-white focus:border-primary outline-none transition-colors resize-none"
                                placeholder="¿En qué puedo ayudarte?"
                            />
                        </div>

                        {/* Mensajes de Feedback */}
                        {status === "success" && (
                            <div className="flex items-center gap-2 text-emerald-400 bg-emerald-400/10 p-4 rounded-xl border border-emerald-400/20">
                                <CheckCircle2 className="w-5 h-5" />
                                <span className="text-sm font-medium">¡Mensaje enviado correctamente! Te responderé pronto.</span>
                            </div>
                        )}

                        {status === "error" && (
                            <div className="flex items-center gap-2 text-rose-400 bg-rose-400/10 p-4 rounded-xl border border-rose-400/20">
                                <XCircle className="w-5 h-5" />
                                <span className="text-sm font-medium">Ocurrió un error. Por favor, intenta de nuevo o escríbeme directo.</span>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-indigo-600 transition-all shadow-lg shadow-primary/20 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {status === "loading" ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" /> Enviando...
                                </>
                            ) : (
                                <>
                                    Enviar Mensaje <Send className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </motion.form>
                </div>

            </div>
            {/* Footer simple */}
            <div className="mt-24 pt-8 border-t border-slate-800 text-center">
                <p className="text-slate-500 text-sm">
                    © {new Date().getFullYear()} Luis Eligio Cortes Rodarte. <br />
                    Construido con <span className="text-white">Next.js 15</span> & <span className="text-white">Tailwind CSS</span>.
                </p>
            </div>
        </section>
    );
}