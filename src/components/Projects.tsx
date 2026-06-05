"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Layers, ArrowUpRight, Lock } from "lucide-react";
import Image from "next/image";

const GithubIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
);

const projects = [
    {
        title: "Enterprise Software Solutions",
        description: "Desarrollo de arquitecturas frontend escalables y optimización de estados complejos para aplicaciones de nivel empresarial. (Bajo acuerdo de confidencialidad).",
        tech: ["React", "Redux Toolkit", "React Native", "Laravel"],
        link: null, // No hay link público
        github: null,
        image: "/enterprise-bg.jpg", // Puedes usar una imagen abstracta de código
        featured: true,
        isNDA: true, // Propiedad especial para mostrar el candado
    },
    {
        title: "E-Commerce Architecture",
        description: "Ingeniería de una plataforma de comercio electrónico con gestión de estado global y consumo de APIs RESTful.",
        tech: ["JavaScript", "HTML5", "CSS3", "REST API"],
        link: "https://academlo-store-g29.netlify.app/",
        github: "https://github.com/AmayaJD/AcademloStore.git",
        image: "/ecommerce.PNG",
        featured: false,
    },
    {
        title: "Real-Time Weather System",
        description: "Aplicación de precisión climática con integración de geolocalización nativa y renderizado dinámico.",
        tech: ["React JS", "API", "Geolocation"],
        link: "https://weatherapp-gen29.netlify.app",
        github: "https://github.com/eligio12/ent2-gen29.git",
        image: "/weatherApp.PNG",
        featured: false,
    },
    {
        title: "Data-Driven Pokedex",
        description: "Interfaz de consulta masiva de datos con optimización de búsqueda y filtrado de alta eficiencia.",
        tech: ["React JS", "Context API", "Tailwind"],
        link: "https://pokedex-gen29.netlify.app",
        github: "https://github.com/eligio12/ent5-gen29.git",
        image: "/pokedex.PNG",
        featured: false,
    },
    {
        title: "Rick & Morty Intelligence System",
        description: "Interfaz de consulta avanzada de datos utilizando Hooks personalizados para la optimización de peticiones asíncronas.",
        tech: ["React JS", "API", "Framer Motion"],
        link: "https://rickandmorty-gen29.netlify.app",
        github: "https://github.com/eligio12/ent3-gen29.git",
        image: "/RickandMorty.PNG",
        featured: false,
    },
];

export default function Projects() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <section id="projects" className="min-h-screen py-24 bg-background scroll-mt-20">
            <div className="container mx-auto px-6">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-3xl lg:text-6xl font-bold text-white mb-4">
                            Proyectos & <span className="text-primary">Casos de Estudio</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl text-lg">
                            Una muestra de mi trayectoria técnica, integrando soluciones académicas de alto nivel y mi experiencia actual en entornos corporativos.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative rounded-3xl overflow-hidden bg-secondary/50 border border-slate-800 flex flex-col hover:border-primary/50 transition-all duration-500 ${project.featured ? "md:col-span-2 lg:col-span-2" : ""
                                }`}
                        >
                            {/* Área de Imagen */}
                            <div className="relative h-72 w-full overflow-hidden">
                                {project.isNDA ? (
                                    <div className="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center p-12 text-center">
                                        <Lock className="w-12 h-12 text-primary mb-4 opacity-50" />
                                        <p className="text-slate-500 text-sm font-mono">PROYECTO PROTEGIDO POR NDA</p>
                                    </div>
                                ) : (
                                    <>
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                        <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/10 transition-colors" />
                                    </>
                                )}

                                {/* Links en Hover (Solo si no es NDA) */}
                                {!project.isNDA && (
                                    <div className="absolute top-6 right-6 flex gap-3 translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        {project.github && (
                                            <a href={project.github} target="_blank" className="p-3 bg-slate-900/90 backdrop-blur-md rounded-full text-white hover:bg-primary transition-colors shadow-xl border border-slate-700">
                                                <GithubIcon />
                                            </a>
                                        )}
                                        {project.link && (
                                            <a href={project.link} target="_blank" className="p-3 bg-slate-900/90 backdrop-blur-md rounded-full text-white hover:bg-primary transition-colors shadow-xl border border-slate-700">
                                                <ExternalLink className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Contenido de la Tarjeta */}
                            <div className="p-10 flex flex-col flex-grow">
                                <div className="flex items-center gap-3 mb-6">
                                    <Layers className="w-5 h-5 text-primary" />
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t) => (
                                            <span key={t} className="px-3 py-1 bg-primary/10 rounded-full text-[10px] uppercase tracking-wider font-bold text-primary border border-primary/20">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-400 text-base leading-relaxed mb-8">
                                    {project.description}
                                </p>

                                {project.link && (
                                    <div className="mt-auto">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            className="inline-flex items-center gap-2 text-white font-bold text-sm group/link hover:text-primary transition-colors"
                                        >
                                            Ver Case Study
                                            <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                        </a>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}