import { motion } from "motion/react";

const Card = ({ card, index, layout }: { card: { src: string; title: string; category: string; content: React.ReactNode }; index: number; layout?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 min-h-[600px] w-full max-w-sm mx-auto group"
  >
    <div className="relative h-48 overflow-hidden">
      <img
        src={card.src}
        alt={card.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-slate-700">
        {card.category}
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
        {card.title}
      </h3>
      <div className="space-y-4">{card.content}</div>
    </div>
  </motion.div>
);
export default Card;