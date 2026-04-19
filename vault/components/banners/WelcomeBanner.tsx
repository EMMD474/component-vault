import { Box, Typography, Paper } from '@mui/material'
import { useAuthStore } from '../../store/authStore'
import { CalendarToday as CalendarIcon, Agriculture as FarmIcon } from '@mui/icons-material'

export const WelcomeBanner = () => {
  const { role } = useAuthStore()

  // Format date: "Thursday, 16 April 2026"
  const today = new Date()
  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(today)

  // Format role for display
  const formatRole = (r: string | null) => {
    if (!r) return 'User'
    return r
      .split('_')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  const roleTitle = formatRole(role)

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 3, md: 5 },
        mb: 4,
        borderRadius: '24px',
        background: 'linear-gradient(135deg, #0D3D1F 0%, #1F7A4D 100%)',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { md: 'center' },
        justifyContent: 'space-between',
        boxShadow: '0 10px 30px rgba(13, 61, 31, 0.15)',
      }}
    >
      {/* Decorative Circles */}
      <Box
        sx={{
          position: 'absolute',
          top: '-20%',
          right: '-5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 70%)',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-30%',
          left: '10%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 70%)',
          zIndex: 0,
        }}
      />

      {/* Main Content */}
      <Box sx={{ zIndex: 1, position: 'relative' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1, opacity: 0.9 }}>
          <FarmIcon sx={{ fontSize: '1.2rem' }} />
          <Typography variant="overline" sx={{ fontWeight: 600, letterSpacing: '2px' }}>
            Zambia Intelligence Farming Platform
          </Typography>
        </Box>
        
        <Typography 
          variant="h3" 
          sx={{ 
            fontWeight: 800, 
            letterSpacing: '-1px', 
            mb: 1,
            fontSize: { xs: '1.75rem', md: '2.5rem' }
          }}
        >
          Welcome back, {roleTitle}!
        </Typography>
        
        <Typography 
          variant="body1" 
          sx={{ 
            opacity: 0.85, 
            maxWidth: '500px',
            fontSize: { xs: '0.9rem', md: '1.05rem' },
            fontWeight: 400
          }}
        >
          Your dashboard for agricultural intelligence, resource tracking, and high-impact decision support.
        </Typography>
      </Box>

      {/* Right Side: Date & Status */}
      <Box 
        sx={{ 
          mt: { xs: 3, md: 0 }, 
          zIndex: 1, 
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'flex-start', md: 'flex-end' },
          gap: 1
        }}
      >
        <Box 
          sx={{ 
            bgcolor: 'rgba(255, 255, 255, 0.1)', 
            backdropFilter: 'blur(8px)',
            py: 1, 
            px: 2, 
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: 1.5
          }}
        >
          <CalendarIcon sx={{ fontSize: '1.1rem', color: '#A7D7BC' }} />
          <Typography sx={{ fontWeight: 600, fontSize: '0.9rem' }}>
            {formattedDate}
          </Typography>
        </Box>
        
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1, 
            px: 2,
            opacity: 0.8
          }}
        >
          <Box 
            sx={{ 
              width: 8, 
              height: 8, 
              bgcolor: '#4CAF73', 
              borderRadius: '50%',
              boxShadow: '0 0 10px #4CAF73'
            }} 
          />
          <Typography variant="caption" sx={{ fontWeight: 600, color: '#A7D7BC' }}>
            SYSTEM ONLINE
          </Typography>
        </Box>
      </Box>
    </Paper>
  )
}
