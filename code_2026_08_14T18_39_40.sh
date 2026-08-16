# Check what's missing and create them
for file in Hero TrustBar Philosophy Conditions HowItWorks Differentiators Testimonials FAQ CTA; do
  if [ ! -f "src/components/sections/${file}.tsx" ]; then
    echo "❌ Missing: ${file}.tsx"
  else
    echo "✅ Exists: ${file}.tsx"
  fi
done
