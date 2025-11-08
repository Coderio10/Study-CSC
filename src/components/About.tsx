import { Target, Heart, Lightbulb } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Introduction Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4 text-lg">
            The truth is, most university CS courses aren't designed for deep understanding. Lectures
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            What Drives Us
          </h1>
        </div>
      </div>

      {/* Three Pillars Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Our Mission */}
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To bridge the gap between classroom teaching and real-world Computer Science skills by curating the best educational learning resources.
              </p>
            </div>

            {/* Why We Exist */}
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why We Exist</h3>
              <p className="text-gray-600 leading-relaxed">
                We know university CS courses often fall short. Students deserve access to quality tutorials, structured paths, and practical resources that actually help them learn.
              </p>
            </div>

            {/* Our Approach */}
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h3>
              <p className="text-gray-600 leading-relaxed">
                We don't create content—we find the best. Every resource is handpicked, tested, and organized to help you master your departmental subjects independently.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What Drives Us Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Drives Us
          </h2>
          
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Frustration with Traditional Learning
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We've all been there—sitting in a lecture that moves too fast, or reading a textbook that's dense and outdated. University CS education often prioritizes theory over practical application, leaving students confused and unmotivated.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                A Better Way to Learn
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We believe learning should be engaging, practical, and student-centered. By curating the best online tutorials, video courses, and documentation, we help you learn at your own pace with resources that actually make sense.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Built by Students, for Students
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Lovable was created by CS students who understand the struggle. We know what it's like to search for good learning materials, waste time on poor resources, and feel lost in your coursework. That's why we've done the hard work for you.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-blue-400">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of CS students who are learning smarter, not harder.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
            Explore Courses
          </button>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-blue-600 pl-6 py-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Over Quantity</h3>
              <p className="text-gray-600">
                We carefully curate every resource, ensuring it meets our standards for clarity, depth, and practical value.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Student-First</h3>
              <p className="text-gray-600">
                Everything we do is designed with your learning journey in mind. We listen to feedback and continuously improve.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Accessibility</h3>
              <p className="text-gray-600">
                Learning should be free and accessible to everyone. We organize resources that are available to all students.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Community Driven</h3>
              <p className="text-gray-600">
                We believe in the power of shared knowledge. Students helping students learn and grow together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
