<template>
  <div>
    <HeroBanner />
    <div class="min-h-screen bg-brand-dark">
      <!-- Content below hero -->
      <div class="container mx-auto px-4 py-8 relative z-10 -mt-24 space-y-12">
        <TopicList />

        <div class="bg-brand-gray/30 rounded-3xl p-6 md:p-10 backdrop-blur-sm border border-white/5 space-y-8">
          <MovieSection
            title="Phim Hàn <br> Quốc mới"
            :movies="koreanMovies"
          />

          <MovieSection
            title="Phim Trung <br> Quốc mới"
            :movies="chineseMovies"
          />
          <MovieSection
            title="Phim US-UK mới"
            :movies="usukMovies"
          />
        </div>

        <Top10List :movies="top10Movies" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'RoPhim - Thảm Họa Thiên Thạch 2',
})

const top10Movies = [
  {
    title: 'Thảm Họa Thiên Thạch 2: Cuộc Di Tản',
    originalTitle: 'Greenland 2: Migration',
    image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&auto=format&fit=crop&q=60',
    quality: 'P.Đề',
    age: 'T16',
    year: '2026',
    duration: '1h 38m'
  },
  {
    title: 'Anaconda: Đụng Độ Siêu Trăn',
    originalTitle: 'Anaconda',
    image: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=500&auto=format&fit=crop',
    quality: 'P.Đề',
    age: 'T13',
    year: '2025',
    duration: '1h 39m'
  },
  {
    title: 'Phi Vụ Động Trời 2',
    originalTitle: 'Zootopia 2',
    image: 'https://images.unsplash.com/photo-1551636898-4aecce7d67f5?w=500&auto=format&fit=crop',
    quality: 'P.Đề',
    dub: 'T.Minh',
    age: 'K',
    year: '2025',
    duration: '1h 50m'
  },
  {
    title: 'Quý Công Tử',
    originalTitle: 'The Childe',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop',
    quality: 'P.Đề',
    age: 'T16',
    year: '2023',
    duration: '1h 58m'
  },
  {
    title: 'Avatar: Lửa và Tro Tàn',
    originalTitle: 'Avatar: Fire and Ash',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop',
    quality: 'P.Đề',
    dub: 'T.Minh',
    age: 'T13',
    year: '2025',
    duration: '3h 12m',
    cam: true
  },
  {
    title: 'Đại Ca',
    originalTitle: 'Boss',
    image: 'https://images.unsplash.com/photo-1596727147705-54a9d0822798?w=500&auto=format&fit=crop',
    quality: 'P.Đề',
    dub: 'T.Minh',
    age: 'T16',
    year: '2025',
    duration: '1h 39m'
  }
]

const koreanMovies = [
    {
        title: 'Cơn Say Mùa Xuân',
        originalTitle: 'Spring Fever',
        image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&auto=format&fit=crop&q=60',
        episodes: '8',
        rating: '6'
    },
    {
        title: 'Thử Thách Thần Tượng',
        originalTitle: 'Running Man',
        image: 'https://images.unsplash.com/photo-1596727147705-54a9d0822798?w=500&auto=format&fit=crop&q=60',
        episodes: '787'
    },
    {
        title: 'Luật Sư Của Thần Tượng',
        originalTitle: 'Idol I',
        image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&auto=format&fit=crop&q=60',
        episodes: '12'
    },
    {
        title: 'Địa Ngục Độc Thân',
        originalTitle: 'Single\'s Inferno',
        image: 'https://images.unsplash.com/photo-1535016120720-40c6874c3b13?w=500&auto=format&fit=crop&q=60',
        episodes: '7'
    },
    {
        title: 'Thời Vàng Son',
        originalTitle: 'Our Golden Days',
        image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&auto=format&fit=crop&q=60',
        episodes: '50',
        rating: '48'
    }
]

const chineseMovies = [
    {
        title: 'Thiếu Niên Ca Hành : Thiên Hạ Vô Song',
        originalTitle: 'The Blood of Youth: Quest of Heroic Hearts',
        image: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?w=500&auto=format&fit=crop&q=60',
        episodes: '5'
    },
    {
        title: 'Nữ Pháp Y (Ngự Tứ Tiểu Ngỗ Tác)',
        originalTitle: 'The Imperial Coroner',
        image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500&auto=format&fit=crop&q=60',
        episodes: '28'
    },
    {
        title: 'Thu Hút Mãnh Liệt',
        originalTitle: 'Affinity',
        image: 'https://images.unsplash.com/photo-1614583225154-5 fc796907717?w=500&auto=format&fit=crop&q=60',
        episodes: '20'
    },
    {
        title: 'Chuyện Lớn Nơi Thành Phố Nhỏ',
        originalTitle: 'The Dream Maker',
        image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&auto=format&fit=crop&q=60',
        episodes: '35'
    },
    {
        title: 'Thanh Dao Không Muốn Làm Sát Thủ',
        originalTitle: 'How to Train Your Killer',
        image: 'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?w=500&auto=format&fit=crop&q=60',
        episodes: '14'
    }
]
// US-UK Movies
const usukMovies = [
    {
        title: 'Người Nhện: Vũ Trụ Mới',
        originalTitle: 'Spider-Man: Into the Spider-Verse',
        image: 'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?w=500&auto=format&fit=crop&q=60',
        episodes: '1'
    },
    {
        title: 'Kẻ Hủy Diệt: Khởi Đầu Mới',
        originalTitle: 'Terminator: Dark Fate',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=60',
        episodes: '1'
    },
    {
        title: 'Ma Trận: Hồi Sinh',
        originalTitle: 'The Matrix Resurrections',
        image: 'https://images.unsplash.com/photo-1517602302552-471fe67acf66?w=500&auto=format&fit=crop&q=60',
        episodes: '1'
    },
    {
        title: 'Sát Thủ John Wick 4',
        originalTitle: 'John Wick: Chapter 4',
        image: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=500&auto=format&fit=crop&q=60',
        episodes: '1'
    },
    {
        title: 'Fast & Furious 9',
        originalTitle: 'F9',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&auto=format&fit=crop&q=60',
        episodes: '1'
    }
]
</script>
