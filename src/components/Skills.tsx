"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Layout,
    Server,
    Database,
    Smartphone,
    GitBranch
} from "lucide-react";

const skillCategories = [
    {
        title: "Frontend & UI/UX",
        icon: <Layout className="w-6 h-6 text-indigo-500" />,
        skills: ["React, Next.js, Vue, Angular", "TS/JS (ES6+)", "Tailwind CSS & Figma", "jQuery (Sistemas Legacy)"],
        color: "from-indigo-500/20 to-transparent"
    },
    {
        title: "Backend & APIs",
        icon: <Server className="w-6 h-6 text-emerald-500" />,
        skills: ["Node.js & Laravel (PHP)", "Python & C++", "Arquitectura REST APIs", "Webhooks & n8n"],
        color: "from-emerald-500/20 to-transparent"
    },
    {
        title: "Ecosistema Mobile",
        icon: <Smartphone className="w-6 h-6 text-rose-500" />,
        skills: ["React Native & Expo", "Google Play Store", "App Store Deployment", "Actualizaciones OTA"],
        color: "from-rose-500/20 to-transparent"
    },
    {
        title: "Bases de Datos & ORMs",
        icon: <Database className="w-6 h-6 text-cyan-500" />,
        skills: ["PostgreSQL & MySQL", "SQL Server", "Sequelize (ORM)", "DBeaver"],
        color: "from-cyan-500/20 to-transparent"
    },
    {
        title: "DevOps & Integraciones",
        icon: <GitBranch className="w-6 h-6 text-amber-500" />,
        skills: ["Contenedores Docker", "Git & GitHub Avanzado", "Meta WhatsApp Cloud API", "Automatización de flujos"],
        color: "from-amber-500/20 to-transparent"
    }
];

export default function Skills() {
    return (
        <section id="skills" className="min-h-screen flex items-center py-24 bg-background relative overflow-hidden scroll-mt-20">
            <div className="container mx-auto px-6">

                {/* Título de la sección */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                        Habilidades Técnicas
                    </h2>
                    <div className="h-1.5 w-20 bg-primary mx-auto rounded-full" />
                </div>

                {/* Grid de Categorías con diseño asimétrico */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            // Truco visual: Las 3 primeras ocupan 2 columnas, las 2 últimas ocupan 3 columnas
                            className={`p-8 rounded-2xl bg-secondary border border-slate-800 relative group overflow-hidden ${index > 2 ? "lg:col-span-3" : "lg:col-span-2"
                                }`}
                        >
                            {/* Efecto de fondo al hacer hover */}
                            <div className={`absolute inset-0 bg-gradient-to-b ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <div className="mb-6 p-3 bg-slate-950 inline-block rounded-xl border border-slate-800">
                                    {category.icon}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-6">
                                    {category.title}
                                </h3>

                                <ul className="space-y-3">
                                    {category.skills.map((skill) => (
                                        <li key={skill} className="flex items-center gap-3 text-slate-400 group-hover:text-slate-200 transition-colors">
                                            <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                                            <span className="text-sm font-medium leading-tight">{skill}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Banner inferior de enfoque */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-16 p-8 rounded-3xl bg-slate-900/50 border border-slate-800 text-center"
                >
                    <p className="text-slate-400 italic">
                        "Enfoque constante en la <span className="text-white font-semibold">Clean Architecture</span>,
                        el rendimiento óptimo y la integración de sistemas complejos."
                    </p>
                </motion.div>

            </div>
        </section>
    );
}