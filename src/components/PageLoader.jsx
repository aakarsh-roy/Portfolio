import { motion, AnimatePresence } from 'framer-motion';

/**
 * PageLoader – Full-screen reveal animation on initial page load.
 * Shows an animated logo + progress wipe, then unmounts.
 */
const PageLoader = ({ isLoading }) => (
  <AnimatePresence>
    {isLoading && (
      <motion.div
        key="loader"
        className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0a0a1a]"
        exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-8"
        >
          <span className="text-5xl font-extrabold gradient-text select-none">AR</span>
        </motion.div>

        {/* Loading bar */}
        <div className="w-48 h-0.5 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </div>

        {/* Subtle text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-xs text-gray-500 font-mono tracking-wider"
        >
          Loading experience...
        </motion.p>
      </motion.div>
    )}
  </AnimatePresence>
);

export default PageLoader;
