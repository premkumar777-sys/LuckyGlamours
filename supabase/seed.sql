-- =============================================================================
-- LUCKY GLAMOURS - INITIAL SEED DATA
-- Copy and run this script in your Supabase SQL Editor to populate initial data.
-- =============================================================================

-- 1. SEED PRODUCTS
INSERT INTO public.products (
  id, name, category, category_label, tagline, description, price_in_inr, size,
  ingredients, directions, precautions, image_url, is_featured, is_in_stock, stock_quantity
) VALUES
(
  'saffron-calendula-soap',
  'Saffron & Calendula Cold-Process Soap Bar',
  'soaps',
  'Handmade Soap',
  'Slow-cured cold process bar infused with botanical petals',
  'Handcrafted in small batches using traditional cold-process saponification. Formulated with cold-pressed coconut oil, raw shea butter, and infused with saffron strands and organic calendula petals for a rich, gentle lather.',
  350.00,
  '125g bar',
  ARRAY[
    'Cold-Pressed Virgin Coconut Oil',
    'Raw Unrefined Shea Butter',
    'Kashmiri Saffron (Crocus Sativus)',
    'Organic Calendula Flower Petals',
    'Pure Sweet Almond Oil',
    'Sustainably Sourced Palm Oil',
    'Distilled Water & Lye (Saponifying agent)'
  ],
  'Lather with warm water between wet palms. Gently apply lather over face and body in circular motions, avoiding direct eye contact. Rinse thoroughly and allow the bar to drain dry on a slotted soap dish between uses.',
  'For external use only. Perform a patch test before first use. If irritation occurs, discontinue use immediately. Store in a dry, cool place away from direct water stream to extend bar life.',
  '/images/products/flower_glow_soap.jpg',
  true,
  true,
  25
),
(
  'raw-honey-goatmilk-soap',
  'Raw Honey & Aloe Vera Soothing Bar',
  'soaps',
  'Handmade Soap',
  'Creamy, botanical aloe vera bar for gentle daily cleansing',
  'A deeply nourishing bar crafted with pure succulent aloe vera and raw forest honey. Provides a soft, velvety foam that cleanses without stripping skin of natural moisture.',
  295.00,
  '120g bar',
  ARRAY[
    'Fresh Aloe Vera Gel Extract',
    'Raw Forest Honey',
    'Cold-Pressed Sesame Seed Oil',
    'Extra Virgin Olive Oil',
    'Organic Castor Oil',
    'Distilled Water & Lye'
  ],
  'Work into a rich lather on wet skin during bath or shower. Rinse thoroughly with lukewarm water. Ideal for daily face and body use.',
  'Contains botanical extracts. For external use only. Keep out of reach of children. Store in a well-draining soap container.',
  '/images/products/aloe_vera_soap.jpg',
  false,
  true,
  30
),
(
  'vetiver-charcoal-soap',
  'Manjistha & Botanical Cleansing Bar',
  'soaps',
  'Handmade Soap',
  'Ayurvedic floral carved bar for clear, radiant skin',
  'Handcrafted with wild manjistha root extract and cold-pressed botanical oils. Helps gently clear skin blemishes, fade tan, and even complexion tone naturally.',
  320.00,
  '125g bar',
  ARRAY[
    'Pure Manjistha Root Extract',
    'Cold-Pressed Coconut Oil',
    'Vetiver Essential Oil (Khus)',
    'Organic Sunflower Seed Oil',
    'Distilled Water & Lye'
  ],
  'Lather well over damp skin, focusing on oil-prone areas. Rinse completely. Use 3-4 times a week or daily as desired.',
  'For external use only. Avoid contact with eyes. Discontinue use if skin sensitivity develops.',
  '/images/products/manjistha_soap.jpg',
  false,
  true,
  20
),
(
  'brahmi-bhringraj-hair-oil',
  'Lucky Herbal Hair Growth Oil',
  'hair-oils',
  'Hair Oil',
  'Traditional herbal decoction slow-infused for hair strength & scalp nourishment',
  'Prepared using traditional infusion methods where black sesame, rosemary, hibiscus, and Ayurvedic herbs are gently slow-infused in cold-pressed oils for stronger, longer, healthier hair.',
  550.00,
  '100ml bottle',
  ARRAY[
    'Black Sesame Seed Oil',
    'Fresh Rosemary & Mint Leaves',
    'Red Hibiscus Flower Blossoms',
    'Tea Tree & Vetiver Roots',
    'Tulsi & Curry Leaves',
    'Atimadhuram (Licorice) Extract'
  ],
  'Section dry hair and warm a small quantity of oil between palms. Gently massage into scalp using fingertips for 5–10 minutes. Leave on for at least 45 minutes or overnight before washing.',
  'For external scalp application only. Contains herbal extracts; patch test behind ear before full scalp application. Store in a cool, dark place away from direct sunlight.',
  '/images/products/hair_growth_oil.jpg',
  true,
  true,
  40
),
(
  'hibiscus-scalp-elixir',
  'Carrot & Turmeric Radiant Herbal Soap',
  'soaps',
  'Handmade Soap',
  'Nutrient-rich carrot extract & wild turmeric bar for bright, fresh skin',
  'Infused with cold-pressed carrot extract and pure golden turmeric. Helps reduce tan, revitalize dull skin, and provide a radiant natural glow.',
  330.00,
  '125g bar',
  ARRAY[
    'Fresh Carrot Extract',
    'Golden Wild Turmeric',
    'Virgin Cold-Pressed Coconut Oil',
    'Sweet Almond Oil',
    'Distilled Water & Lye'
  ],
  'Work into a rich lather on wet skin during bath or shower. Rinse thoroughly with water.',
  'External use only. Avoid getting into eyes. Rinse thoroughly if eye contact occurs.',
  '/images/products/carrot_herbal_soap.jpg',
  false,
  true,
  25
),
(
  'almond-rose-body-oil',
  'Lucky Herbal Handcrafted Artisan Soaps',
  'soaps',
  'Handmade Soap',
  'Pure organic botanical bars handcrafted with love and care',
  'Authentic Lucky Herbal cold-process soap bars formulated with natural oils, botanical flowers, and skin-loving herbs. Each bar is carefully cured for superior mildness.',
  350.00,
  '125g bar',
  ARRAY[
    'Virgin Coconut Oil',
    'Organic Plant Extracts',
    'Botanical Flower Infusions',
    'Raw Shea Butter',
    'Pure Essential Oils'
  ],
  'Apply generously to damp skin during bath or shower. Store on a draining soap dish between uses.',
  'For external body use only. Do not apply on broken or irritated skin.',
  '/images/products/lucky_herbal_soaps_real.jpeg',
  false,
  true,
  15
),
(
  'sesame-cardamom-body-oil',
  'Sesame & Cardamom Warming Body Oil',
  'body-oils',
  'Body Oil',
  'Comforting botanical blend for evening self-care massage',
  'Crafted with unrefined black sesame oil and infused with aromatic green cardamom pods and vetiver root to provide a soothing, warming sensory ritual.',
  580.00,
  '150ml bottle',
  ARRAY[
    'Unrefined Pressed Sesame Seed Oil',
    'Crushed Green Cardamom Infusion',
    'Vetiver Root Extract',
    'Sunflower Seed Base Oil',
    'Natural Tocopherol'
  ],
  'Warm a generous pump in hands and massage over legs, arms, and torso before bedtime or warm shower.',
  'External use only. Discontinue if skin reacts.',
  '/images/products/hair_growth_oil.jpg',
  false,
  true,
  18
),
(
  'botanical-ritual-gift-box',
  'The Botanical Ritual Gift Box',
  'gift-sets',
  'Gift Set',
  'Thoughtful curation of handcrafted Lucky Herbal soaps & hair oil',
  'A beautifully hand-packaged bundle featuring a choice of signature Lucky Herbal handmade soaps alongside our nourishing botanical hair growth oil. Ideal for festive gifting, wedding favors, or personal pampering.',
  1450.00,
  'Custom Gift Set (3 Soaps + 1 Oil)',
  ARRAY[
    'Includes 3 x 125g Cold-Process Soap Bars',
    'Includes 1 x 100ml Botanical Hair Growth Oil',
    'Handmade Wooden Soap Saver Box'
  ],
  'Inquire via WhatsApp for custom soap selection and personalized handwritten gift card inclusion.',
  'Custom combinations subject to current batch availability.',
  '/images/products/lucky_herbal_soaps_real.jpeg',
  false,
  true,
  10
)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  price_in_inr = EXCLUDED.price_in_inr,
  stock_quantity = EXCLUDED.stock_quantity;

-- 2. SEED SERVICES
INSERT INTO public.services (
  id, name, category, category_label, description, occasion, starting_price,
  package_details, image_url, gallery_images, is_active
) VALUES
(
  'bridal-engagement-makeup',
  'Couture Bridal & Engagement Makeup',
  'bridal-groom',
  'Bridal & Groom',
  'Signature HD & airbrush makeup tailored for bridal ceremonies, engagement functions, and ring events.',
  'Wedding & Engagement Ceremonies',
  'Enquire for pricing',
  ARRAY[
    'HD / Airbrush bridal & engagement makeup',
    'Hair styling & accessory / floral placement',
    'Saree, lehenga & dupatta draping',
    'Eyelash application & touch-up kit'
  ],
  '/images/bridal/bride_portrait.jpeg',
  ARRAY[
    '/images/bridal/bride_portrait.jpeg',
    '/images/LuckyGlamours/traditional_bride_pink_teal_kanjeevaram.jpeg',
    '/images/LuckyGlamours/bride_temple_jewellery_stage.jpeg',
    '/images/LuckyGlamours/south_indian_bride_silk_saree.jpeg',
    '/images/LuckyGlamours/bride_blue_saree_portrait.jpeg'
  ],
  true
),
(
  'groom-makeup-grooming',
  'Groom Makeup & Grooming',
  'bridal-groom',
  'Bridal & Groom',
  'Subtle, camera-ready grooming focusing on skin evening, anti-shine finish, and natural complexion refinement.',
  'Wedding & Reception',
  'Enquire for pricing',
  ARRAY[
    'Hydrating skin prep & tone evening',
    'Anti-shine matte finish for photos',
    'Beard alignment & hair setting'
  ],
  '/images/bridal/wedding_couple.jpeg',
  ARRAY[
    '/images/bridal/wedding_couple.jpeg',
    '/images/LuckyGlamours/wedding_couple_forehead_stage.jpeg',
    '/images/LuckyGlamours/wedding_couple_intimate_pose.jpeg',
    '/images/LuckyGlamours/reception_couple_navy_blue.jpeg'
  ],
  true
),
(
  'reception-makeup',
  'Reception Makeup',
  'bridal-groom',
  'Bridal & Groom',
  'Glamorous high-definition evening makeup designed for stage lighting and flash photography.',
  'Wedding Reception & Gala',
  'Enquire for pricing',
  ARRAY[
    'HD evening glam makeup',
    'Statement eye or lip styling',
    'Hairstyling & veil / dupatta setting'
  ],
  '/images/bridal/bride_thali.jpeg',
  ARRAY[
    '/images/bridal/bride_thali.jpeg',
    '/images/LuckyGlamours/reception_couple_navy_blue.jpeg',
    '/images/LuckyGlamours/bride_blue_saree_portrait.jpeg'
  ],
  true
),
(
  'party-makeup',
  'Party & Celebration Makeup',
  'occasion',
  'Occasion Makeup',
  'Chic, polished makeup styling for birthdays, anniversaries, sangeet, and festive celebrations.',
  'Parties & Festive Events',
  'Enquire for pricing',
  ARRAY[
    'Customized party makeup',
    'Hair styling & setting',
    'Optional lash application'
  ],
  '/images/bridal/bride_thali.jpeg',
  ARRAY[
    '/images/bridal/bride_thali.jpeg',
    '/images/LuckyGlamours/trendy_bride_sunglasses.jpeg',
    '/images/LuckyGlamours/haldi_mehendi_bride_yellow.jpeg'
  ],
  true
),
(
  'wedding-guest-makeup',
  'Wedding Guest & Family Makeup',
  'occasion',
  'Occasion Makeup',
  'Elegant, long-lasting makeup styling for bridesmaids, mothers, sisters, and wedding guests.',
  'Sangeet, Mehendi & Guests',
  'Enquire for pricing',
  ARRAY[
    'Soft HD complexion styling',
    'Hair blow-dry or bun styling',
    'Dupatta pinning assistance'
  ],
  '/images/bridal/bride_portrait.jpeg',
  ARRAY[
    '/images/bridal/bride_portrait.jpeg',
    '/images/LuckyGlamours/haldi_bride_candid_portrait.jpeg',
    '/images/LuckyGlamours/south_indian_bride_silk_saree.jpeg'
  ],
  true
),
(
  'pre-wedding-photoshoot',
  'Pre-Wedding Photoshoot Makeup',
  'photoshoot',
  'Pre-Wedding & Shoots',
  'Natural, camera-focused makeup crafted for outdoor and concept pre-wedding photography.',
  'Pre-Wedding Shoot',
  'Enquire for pricing',
  ARRAY[
    'Camera-ready natural skin finish',
    'On-set touch-ups & outfit tweaks',
    'Hair setting for outdoor weather'
  ],
  '/images/bridal/wedding_couple_alt.jpeg',
  ARRAY[
    '/images/bridal/wedding_couple_alt.jpeg',
    '/images/LuckyGlamours/trendy_bride_sunglasses.jpeg',
    '/images/LuckyGlamours/haldi_bride_maang_tikka.jpeg'
  ],
  true
),
(
  'special-event-makeup',
  'Bridal Hair Artistry & Special Styling',
  'photoshoot',
  'Pre-Wedding & Shoots',
  'Bespoke traditional hair styling, intricate floral poola jada, and media makeup for celebrations.',
  'Ceremonies & Editorial Events',
  'Enquire for pricing',
  ARRAY[
    'Intricate floral braid (poola jada)',
    'Traditional hair ornamentation setting',
    'Saree draping and veil pinning'
  ],
  '/images/bridal/bridal_hairstyle.jpeg',
  ARRAY[
    '/images/bridal/bridal_hairstyle.jpeg',
    '/images/LuckyGlamours/bridal_floral_braid_poola_jada.jpeg',
    '/images/LuckyGlamours/traditional_bride_pink_teal_kanjeevaram.jpeg'
  ],
  true
)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  starting_price = EXCLUDED.starting_price;

-- 3. SEED COURSES
INSERT INTO public.courses (
  id, name, subtitle, description, what_you_will_learn,
  format, duration, eligibility, fees, image_url, gallery_images, is_active
) VALUES
(
  'eyebrow-shaping-threading',
  'Eyebrow Shaping & Professional Threading',
  'Master precision facial mapping, thread control & brow design',
  'Learn fundamental brow symmetry, facial structure mapping, precision cotton thread control, tweezing, trimming, and shaping to craft bespoke brows for every face shape.',
  ARRAY[
    'Facial geometry & brow mapping',
    'Thread loop holding & tension control',
    'Precision trimming & shaping techniques',
    'Client consultation & hygiene standards'
  ],
  'In-Person Practical Workshop',
  'Contact us for course details',
  'Open to beginners & beauty enthusiasts',
  'Contact us for course details',
  '/images/bridal/bride_portrait.jpeg',
  ARRAY[
    '/images/bridal/bride_portrait.jpeg',
    '/images/LuckyGlamours/haldi_bride_candid_portrait.jpeg',
    '/images/LuckyGlamours/bride_temple_jewellery_stage.jpeg'
  ],
  true
),
(
  'basic-makeup-techniques',
  'Basic & Personal Self-Makeup Masterclass',
  'Daily grooming, skin match & effortless makeup skills',
  'Designed for individuals wanting to master their daily self-makeup routine. Learn undertone identification, foundation blending, quick day-to-night transitions, and brush maintenance.',
  ARRAY[
    'Skin type analysis & primer selection',
    'Color correcting & seamless foundation match',
    'Soft eye makeup & winged liner application',
    'Essential makeup kit curation'
  ],
  'Individual or Small Group Sessions',
  'Contact us for course details',
  'Open to anyone seeking personal makeup mastery',
  'Contact us for course details',
  '/images/bridal/bride_thali.jpeg',
  ARRAY[
    '/images/bridal/bride_thali.jpeg',
    '/images/LuckyGlamours/south_indian_bride_silk_saree.jpeg',
    '/images/LuckyGlamours/haldi_bride_maang_tikka.jpeg',
    '/images/LuckyGlamours/trendy_bride_sunglasses.jpeg'
  ],
  true
),
(
  'master-bridal-makeup',
  'Master Bridal Makeup Artistry',
  'Comprehensive professional bridal styling & HD application',
  'In-depth professional training covering traditional and contemporary bridal makeup styles, HD airbrush techniques, dupatta draping, and client management for wedding artists.',
  ARRAY[
    'Advanced HD & water-resistant bridal base',
    'Cut-crease & smoked wedding eye looks',
    'Jewelry setting, hair styling & dupatta draping',
    'Bridal portfolio building & client pricing strategy'
  ],
  'In-Person Intensive Module',
  'Contact us for course details',
  'Basic makeup knowledge recommended',
  'Contact us for course details',
  '/images/bridal/bridal_hairstyle.jpeg',
  ARRAY[
    '/images/bridal/bridal_hairstyle.jpeg',
    '/images/LuckyGlamours/traditional_bride_pink_teal_kanjeevaram.jpeg',
    '/images/LuckyGlamours/bridal_floral_braid_poola_jada.jpeg',
    '/images/LuckyGlamours/wedding_couple_forehead_stage.jpeg'
  ],
  true
)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  fees = EXCLUDED.fees;
