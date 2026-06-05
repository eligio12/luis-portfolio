"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, User, MapPin, CheckCircle2 } from "lucide-react";

export default function AboutMe() {
    return (
        <section id="about" className="min-h-screen flex items-center py-24 bg-background relative scroll-mt-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Lado Izquierdo: Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">
                            Acerca de <span className="text-indigo-500">Mí</span>
                        </h2>
                        <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
                            <p>
                                Soy un <span className="text-white font-medium">Ingeniero en Computación</span> y Desarrollador Full Stack con sólida experiencia en la arquitectura y despliegue de aplicaciones escalables.
                            </p>
                            <p>
                                Me especializo en ecosistemas <span className="text-indigo-400 font-medium">React, Next.js y React Native</span>, respaldados por soluciones Backend robustas utilizando <span className="text-indigo-400 font-medium">Node.js y Laravel</span>. Mi enfoque principal es escribir código limpio, optimizar el rendimiento y entregar productos de alta calidad técnica que generen valor real de negocio.
                            </p>
                        </div>

                        {/* Datos Rápidos */}
                        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/50 border border-slate-800 hover:border-indigo-500/50 transition-colors">
                                <div className="p-3 bg-indigo-500/10 rounded-xl">
                                    <User className="text-indigo-500 w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Perfil</p>
                                    <p className="text-white font-medium">Software Engineer</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/50 border border-slate-800 hover:border-indigo-500/50 transition-colors">
                                <div className="p-3 bg-indigo-500/10 rounded-xl">
                                    <MapPin className="text-indigo-500 w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Base de Operaciones</p>
                                    <p className="text-white font-medium">Guadalajara, MX</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Lado Derecho: Educación y Experiencia */}
                    <div className="space-y-12">

                        {/* Experiencia */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-8">
                                <Briefcase className="text-indigo-500" /> Experiencia Laboral
                            </h3>

                            <div className="space-y-12 border-l-2 border-slate-800 ml-3 pl-8">

                                {/* J&MARJUS */}
                                <div className="relative group">
                                    <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-slate-800 border-2 border-indigo-500 group-hover:bg-indigo-500 group-hover:shadow-[0_0_15px_#6366f1] transition-all duration-300" />
                                    <p className="text-indigo-400 font-bold text-sm tracking-wide">Jun 2023 - Presente</p>
                                    <h4 className="text-white font-bold text-xl mt-1">Desarrollador React Senior</h4>
                                    <p className="text-slate-400 font-medium mb-4">J&MARJUS</p>

                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed hover:text-slate-300 transition-colors">
                                            <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                                            <span><strong>Arquitectura Frontend:</strong> Lidero el desarrollo de interfaces con React y Redux Toolkit, optimizando el manejo de estados globales y reduciendo tiempos de carga.</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed hover:text-slate-300 transition-colors">
                                            <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                                            <span><strong>Desarrollo Mobile:</strong> Responsable del ciclo de vida en React Native, desde la integración de mapas hasta despliegues en Google Play Store.</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed hover:text-slate-300 transition-colors">
                                            <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                                            <span><strong>Backend & BD:</strong> Diseño de base de datos en MySQL e implementación de rutas seguras en Laravel (PHP) conectando servicios corporativos.</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Medical Expo */}
                                <div className="relative group">
                                    <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-slate-800 border-2 border-slate-600 group-hover:bg-indigo-500 group-hover:border-indigo-500 transition-all duration-300" />
                                    <p className="text-slate-500 font-bold text-sm tracking-wide">Oct 2022 - May 2023</p>
                                    <h4 className="text-white font-bold text-xl mt-1">Full Stack Developer</h4>
                                    <p className="text-slate-400 font-medium mb-4">Medical Expo</p>

                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed hover:text-slate-300 transition-colors">
                                            <CheckCircle2 className="w-5 h-5 text-slate-500 shrink-0 mt-0.5 group-hover:text-indigo-500 transition-colors" />
                                            <span><strong>Desarrollo Full-Cycle:</strong> Construcción de módulos web integrales utilizando Node.js y Sequelize (ORM).</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed hover:text-slate-300 transition-colors">
                                            <CheckCircle2 className="w-5 h-5 text-slate-500 shrink-0 mt-0.5 group-hover:text-indigo-500 transition-colors" />
                                            <span><strong>Testing & Calidad:</strong> Implementación de depuración de código que redujeron la tasa de errores en producción durante nuevos lanzamientos.</span>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </motion.div>

                        {/* Educación */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-8">
                                <GraduationCap className="text-indigo-500" /> Educación
                            </h3>

                            <div className="space-y-8 border-l-2 border-slate-800 ml-3 pl-8">
                                {/* UDG */}
                                <div className="relative group">
                                    <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-slate-800 border-2 border-slate-600 group-hover:bg-indigo-500 group-hover:border-indigo-500 transition-all duration-300" />
                                    <p className="text-indigo-400 font-bold text-sm tracking-wide">2017 - 2022</p>
                                    <h4 className="text-white font-bold text-xl mt-1">Ingeniería en Computación</h4>
                                    <p className="text-slate-400 text-sm">Universidad de Guadalajara</p>
                                </div>

                                {/* Academlo */}
                                <div className="relative group">
                                    <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-slate-800 border-2 border-slate-600 group-hover:bg-indigo-500 group-hover:border-indigo-500 transition-all duration-300" />
                                    <p className="text-slate-500 font-bold text-sm tracking-wide">2022</p>
                                    <h4 className="text-white font-bold text-xl mt-1">Full-Stack Web Development</h4>
                                    <p className="text-slate-400 text-sm">Academlo, México</p>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}