import { motion } from 'framer-motion';

export const ConnectionMap = () => {
  return (
    <div className="relative w-full h-[400px] bg-gray-100 rounded-3xl overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#d1d5db" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Subtle world map shape */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[300px] bg-gray-200/50 rounded-[50%] blur-sm" />
      </div>

      {/* Warsaw marker */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
        className="absolute left-[30%] top-[35%]"
      >
        <div className="relative">
          {/* Pulse ring */}
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-gray-900"
          />
          {/* Marker */}
          <div className="w-4 h-4 bg-gray-900 rounded-full border-4 border-white shadow-lg" />
          {/* Label */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-xl shadow-lg whitespace-nowrap">
            <p className="font-semibold text-gray-900">Warszawa</p>
            <p className="text-xs text-gray-500">52°N 21°E</p>
          </div>
        </div>
      </motion.div>

      {/* Shanghai marker */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
        className="absolute right-[25%] top-[55%]"
      >
        <div className="relative">
          {/* Pulse ring */}
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="absolute inset-0 w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-lime"
          />
          {/* Marker */}
          <div className="w-4 h-4 bg-lime rounded-full border-4 border-white shadow-lg" />
          {/* Label */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-xl shadow-lg whitespace-nowrap">
            <p className="font-semibold text-lime">Shanghai</p>
            <p className="text-xs text-gray-500">31°N 121°E</p>
          </div>
        </div>
      </motion.div>

      {/* Animated connection line */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path
          d="M 30 40 Q 50 25, 70 50"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="0.5"
          strokeDasharray="2 1"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#111827" />
            <stop offset="100%" stopColor="#94c43d" />
          </linearGradient>
        </defs>
      </svg>

      {/* Animated dot along the path */}
      <motion.div
        initial={{ left: "30%", top: "40%" }}
        animate={{ 
          left: ["30%", "50%", "70%"],
          top: ["40%", "30%", "50%"]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute w-3 h-3 bg-lime rounded-full shadow-lg"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </div>
  );
};
